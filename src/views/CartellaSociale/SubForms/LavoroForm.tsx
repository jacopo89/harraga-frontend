import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeLavoro} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    lavoroFormElements,
    lavoroInitialValues,
    lavoroValidationSchema
} from "../../../models/form/lavoro/LavoroFormType";

export default function (){
    const params = useParams();
    const [lavoro, setLavoro] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeLavoro(params.id).then(response => setLavoro(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(lavoro.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={lavoroFormElements} validationSchema={lavoroValidationSchema} onSubmit={onSubmit} initialValues={lavoroInitialValues} existingValue={lavoro}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"esperienzaLavorativas"} nestedForm={EsperienzaLavorativaForm} />
                    </Col>
                </Row>
            </section>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const EsperienzaLavorativaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`stato`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`ambitiLavorativi`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeAzienda`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`luogoAzienda`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailAzienda`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoAzienda`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`competenzeAcquisite`}/>
            </Col>
        </Row>

    </>
}
