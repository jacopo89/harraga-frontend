import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeCompetenze} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    competenzeElements,
    competenzeInitialValues,
    competenzeValidationSchema
} from "../../../models/form/competenze/CompetenzeFormType";

export default function (){
    const params = useParams();
    const [competenze, setCompetenze] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeCompetenze(params.id).then(response => setCompetenze(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(competenze.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={competenzeElements} validationSchema={competenzeValidationSchema} onSubmit={onSubmit} initialValues={competenzeInitialValues} existingValue={competenze}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"linguaDichiaratas"} nestedForm={LinguaDichiarataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"linguaAttestatas"} nestedForm={LinguaAttestataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"linguaCertificatas"} nestedForm={LinguaCertificataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"competenzaDigitales"} nestedForm={CompetenzeDigitaliForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"altraCompetenzas"} nestedForm={AltreCompetenzeForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"patentes"} nestedForm={PatenteForm}/>
                    </Col>
                </Row>
            </section>

            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const LinguaDichiarataForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`livelloOrale`}/>
            </Col>

        </Row>
    </>
}

const LinguaAttestataForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`livelloOrale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`certificazione`}/>
            </Col>

        </Row>
    </>
}

const LinguaCertificataForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`livelloOrale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`certificazione`}/>
            </Col>

        </Row>
    </>
}

const CompetenzeDigitaliForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`livello`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
    </>
}

const AltreCompetenzeForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`livello`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
    </>
}

const PatenteForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}