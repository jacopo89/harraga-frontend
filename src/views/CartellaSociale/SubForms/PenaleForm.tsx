import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeLavoro, getCartellaSocialePenale} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    lavoroFormElements,
    lavoroInitialValues,
    lavoroValidationSchema
} from "../../../models/form/lavoro/LavoroFormType";
import {
    penaleFormElements,
    penaleInitialValues,
    penaleValidationSchema
} from "../../../models/form/penale/PenaleFormType";

export default function (){
    const params = useParams();
    const [penale, setPenale] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialePenale(params.id).then(response => setPenale(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(penale.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={penaleFormElements} validationSchema={penaleValidationSchema} onSubmit={onSubmit} initialValues={penaleInitialValues} existingValue={penale}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"procedurePenali"} nestedForm={ProcedurePenaliForm} />
                    </Col>
                </Row>
            </section>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const ProcedurePenaliForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`statoProcedimento`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeAssistenteSociale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeAssistenteSociale`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailAssistenteSociale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoAssistenteSociale`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`peiDescrizione`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`peiAllegato`}/>
            </Col>
        </Row>
    </>
}
