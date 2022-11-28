import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {editAnagraficaRoute, nuovaCartellaSocialeRoute} from "../../routes/frontend-routes";
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {getComparator, Order, stableSort} from "./Tabella/tabellaHelper";
import {EnhancedTableHead, HeadCell} from "./Tabella/EnhancedTableHead";
import {EnhancedTableToolbar} from "./Tabella/EnhancedTableToolbar";
import {getCartelleSociali} from "../../api/cartellaSociale/cartellaSocialeApi";
import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {filtriElements, filtriInitialValues} from "./FiltriTabellaCartelleSociali/FiltriCartelleSocialiFormType";
import FormElement from "../../form-generator/form-elements/FormElement";
import FormGeneratorContext from "../../form-generator/form-context/FormGeneratorContext";
import {Col, Row} from "react-bootstrap";
import {buildFiltersFromValues} from "../../api/AuthClient";

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

export default function TabellaCartelleSociali(){

    return <FormGeneratorContextProvider elements={filtriElements} initialValues={filtriInitialValues}>
        <Row>
            <Col xs={6}>
                <FormElement accessor={"anagrafica.nome"}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={"anagrafica.cognome"}/>
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <FormElement accessor={"anagrafica.paeseOrigine"}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={"anagrafica.italiano"}/>
            </Col>
        </Row>

        <Tabella/>
    </FormGeneratorContextProvider>
}

function Tabella(){
    const navigate = useNavigate();
    const [cartelleSociali, setCartelleSociali] = useState<CartellaSociale[]>([])

    const {formValue,elements} = useContext(FormGeneratorContext)
    const editHandler = (id:string)=> navigate(editAnagraficaRoute(id))
    useEffect(()=>{console.log("elements",elements)},[elements])
    useEffect(()=>{
        getCartelleSociali(buildFiltersFromValues(formValue,elements)).then(response => setCartelleSociali(response.data["hydra:member"].map((cartellaSociale:CartellaSocialeData)=>{
            return {
                "@id": cartellaSociale["@id"],
                id:cartellaSociale.id,
                nome:cartellaSociale.anagrafica.nome,
                cognome:cartellaSociale.anagrafica.cognome,
                numeroTutela:cartellaSociale.anagrafica.numeroTutela,
            }
        })))
    },[formValue])

    return <div>
        <Button onClick={()=>{navigate(nuovaCartellaSocialeRoute)}}>Crea</Button>
        <EnhancedTable rows={cartelleSociali} editHandler={editHandler}></EnhancedTable>
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
    editHandler: (id:string) => void
}


export function EnhancedTable({rows,editHandler}:EnhancedTable) {
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

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
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
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.nome}
                                            </TableCell>
                                            <TableCell align="right">{row.cognome}</TableCell>
                                            <TableCell align="right">{row.numeroTutela}</TableCell>
                                            <TableCell align="right"><Button onClick={()=>editHandler(row.id)}>Modifica</Button></TableCell>
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
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}
