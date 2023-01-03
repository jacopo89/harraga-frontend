import {useNavigate} from "react-router";
import {editAnagraficaRoute, nuovaCartellaSocialeRoute} from "../../routes/frontend-routes";
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {getComparator, Order, stableSort} from "./Tabella/tabellaHelper";
import {EnhancedTableHead, HeadCell} from "./Tabella/EnhancedTableHead";
import {EnhancedTableToolbar} from "./Tabella/EnhancedTableToolbar";
import {
    getCartelleSociali,
    getCartelleSocialiUtente,
    rimuoviCartellaSociale
} from "../../api/cartellaSociale/cartellaSocialeApi";
import {filtriElements, filtriInitialValues} from "./FiltriTabellaCartelleSociali/FiltriCartelleSocialiFormType";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Filter} from "../../api/AuthClient";
import {FormikValues} from "formik";
import FilterGeneratorContextProvider from "../../form-generator/filter-context/FilterGeneratorContextProvider";
import FilterElement from "../../form-generator/filter-elements/FilterElement";
import FilterGeneratorContext from "../../form-generator/filter-context/FilterGeneratorContext";
import {FilterElements} from "../../form-generator/filter-elements/FilterElementInterface";
import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {uploadCSVFormElements, uploadCSVInitialValues} from "../UploadCSV/UploadCSVFormType";
import FormElement from "../../form-generator/form-elements/FormElement";
import {uploadCSV} from "../../api/csvUpload/csvUploadApi";
import {toast} from "react-toastify";
import useCurrentUser from "../../helpers/authentication/useCurrentUser";
import useGetPermission from "../../permissions/useGetPermissions";


interface Anagrafica{
    nome:string,
    cognome:string,
    numeroTutela:string
}

export interface CartellaSocialeData{
    "@id":string,
    id:string,
    anagrafica:Anagrafica
}

export interface UtenteCartellaSocialeData{
    cartellaSociale:CartellaSocialeData
}
export default function TabellaCartelleSocialiPage(){

    const uploadCSVHandler = (values:any) => uploadCSV(values).then(()=> toast.success("Cartelle caricate con successo")).catch(reason=>{
        reason.response.data.forEach((message:string) => toast.error(message))
    })

    return <>
        <FilterGeneratorContextProvider elements={filtriElements} initialValues={filtriInitialValues}>
        <Card className={"my-3"}>
            <Card.Header className={"py-3"}>Filtri</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={6}>
                        <FilterElement accessor={"nome"}/>
                    </Col>
                    <Col xs={6}>
                        <FilterElement accessor={"cognome"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FilterElement accessor={"paeseOrigine"}/>
                    </Col>
                    <Col xs={6}>
                        <FilterElement accessor={"italiano"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FilterElement accessor={"maggiorenne"}/>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </Card.Body>

        </Card>
        <Tabella/>
    </FilterGeneratorContextProvider>
        Importa tramite CSV
        <FormGeneratorContextProvider onSubmit={uploadCSVHandler} elements={uploadCSVFormElements} initialValues={uploadCSVInitialValues}>
            <FormElement accessor={"csvFile"}></FormElement>
            <Button type={"submit"}>Importa</Button>
        </FormGeneratorContextProvider>
    </>
}

function Tabella(){
    const navigate = useNavigate();
    const {canReadTutteCartelle} = useGetPermission();
    const [cartelleSociali, setCartelleSociali] = useState<CartellaSociale[]>([])
    const currentUser = useCurrentUser();
    const {formValue,elements} = useContext(FilterGeneratorContext)
    const editHandler = (id:string)=> navigate(editAnagraficaRoute(id))

    const filters:Filter[] = []
    const getFiltersObjectFromFormValue = (formValue:FormikValues, elements:FilterElements) => {
        elements.forEach(element => {
            filters.push({...element,
                type: element.type,
                value: (element.valueManipulator) ? element.valueManipulator(formValue) : formValue[element.accessor] ,
                accessor: (element.accessorManipulator) ? element.accessorManipulator(formValue) : element.accessor,
            })
        })
        return filters;
    }

    console.log("id", currentUser)
    const getCartelleSocialiByFilters = () => {
        if(canReadTutteCartelle){
            return getCartelleSociali(getFiltersObjectFromFormValue(formValue,elements)).then(response => setCartelleSociali(response.data["hydra:member"].map((cartellaSociale:CartellaSocialeData)=>{
                return {
                    "@id": cartellaSociale["@id"],
                    id:cartellaSociale.id,
                    nome:cartellaSociale.anagrafica.nome,
                    cognome:cartellaSociale.anagrafica.cognome,
                    numeroTutela:cartellaSociale.anagrafica.numeroTutela,
                }
            })))
        }else{
            const filters = getFiltersObjectFromFormValue(formValue,elements);
            filters.forEach(filter=>{
                filter.accessor = `cartellaSociale.${filter.accessor}`
            })

            return getCartelleSocialiUtente(currentUser.id, getFiltersObjectFromFormValue(formValue,elements)).then(response => setCartelleSociali(response.data["hydra:member"].map((cartellaSociale:UtenteCartellaSocialeData)=>{
                return {
                    "@id": cartellaSociale.cartellaSociale["@id"],
                    id:cartellaSociale.cartellaSociale.id,
                    nome:cartellaSociale.cartellaSociale.anagrafica.nome,
                    cognome:cartellaSociale.cartellaSociale.anagrafica.cognome,
                    numeroTutela:cartellaSociale.cartellaSociale.anagrafica.numeroTutela,
                }
            })))
        }

    }
    const removeHandler = (id:string)=> rimuoviCartellaSociale(id).then(()=> getCartelleSocialiByFilters())
    useEffect(()=>{
        getCartelleSocialiByFilters()
    },[formValue])

    return <div>
        <EnhancedTable rows={cartelleSociali} addHandler={()=>{navigate(nuovaCartellaSocialeRoute)}} editHandler={editHandler} removeHandler={removeHandler}></EnhancedTable>
    </div>
}

export interface CartellaSociale {
    "@id":string;
    id: string;
    nome: string;
    cognome: string;
    numeroTutela: string;
}


const headCells: HeadCell[] = [
    {
        id: 'nome',
        numeric: false,
        disablePadding: true,
        label: 'Nome',
    },
    {
        id: 'cognome',
        numeric: true,
        disablePadding: false,
        label: 'Cognome',
    },
    {
        id: 'numeroTutela',
        numeric: true,
        disablePadding: false,
        label: 'Numero Tutela',
    },

];

interface EnhancedTable{
    rows: CartellaSociale[],
    editHandler: (id:string) => void,
    removeHandler: (id:string) => void,
    addHandler: () => void
}


export function EnhancedTable({rows,editHandler,addHandler, removeHandler}:EnhancedTable) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof CartellaSociale>('nome');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof CartellaSociale,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numRows={rows.length} numSelected={selected.length} addHandler={addHandler} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            headCells={headCells}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                /*.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => {}}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.nome}
                                            </TableCell>
                                            <TableCell align="right">{row.cognome}</TableCell>
                                            <TableCell align="right">{row.numeroTutela}</TableCell>
                                            <TableCell align="right">
                                                <Button className={"me-1"} onClick={()=>editHandler(row.id)}>Modifica</Button>
                                                <Button variant={"danger"} onClick={()=>removeHandler(row.id)}>Rimuovi</Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
