import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {IterableForm} from "../../../form-generator/form-elements/IterableForm";

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
import {lingueDichiarateInitialValues} from "../../../models/form/competenze/lingueDichiarate/LingueDichiarateFormType";
import {lingueAttestateInitialValues} from "../../../models/form/competenze/lingueAttestate/LingueAttestateFormType";
import {
    lingueCertificateInitialValues
} from "../../../models/form/competenze/lingueCertificate/LingueCertificateFormType";
import {
    competenzeDigitaliInitialValues
} from "../../../models/form/competenze/competenzeDigitali/CompetenzeDigitaliFormType";
import {altreCompetenzeInitialValues} from "../../../models/form/competenze/altreCompetenze/AltreCompetenzeFormType";
import {patenteInitialValues} from "../../../models/form/competenze/patenti/PatenteFormType";

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
                        <IterableForm accessor={"linguaDichiaratas"} buttonLabel={"Aggiungi "} initialValue={lingueDichiarateInitialValues} form={LinguaDichiarataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"linguaAttestatas"} buttonLabel={"Aggiungi "} initialValue={lingueAttestateInitialValues} form={LinguaAttestataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"linguaCertificatas"} buttonLabel={"Aggiungi "} initialValue={lingueCertificateInitialValues} form={LinguaCertificataForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"competenzaDigitales"} buttonLabel={"Aggiungi "} initialValue={competenzeDigitaliInitialValues} form={CompetenzeDigitaliForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"altraCompetenzas"} buttonLabel={"Aggiungi "} initialValue={altreCompetenzeInitialValues} form={AltreCompetenzeForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"patentes"} buttonLabel={"Aggiungi "} initialValue={patenteInitialValues} form={PatenteForm}/>
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
                <FormElement accessor={`linguaDichiaratas[${index}].lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`linguaDichiaratas[${index}].livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`linguaDichiaratas[${index}].livelloOrale`}/>
            </Col>

        </Row>
    </>
}

const LinguaAttestataForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`linguaAttestatas[${index}].lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`linguaAttestatas[${index}].livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`linguaAttestatas[${index}].livelloOrale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`linguaAttestatas[${index}].certificazione`}/>
            </Col>

        </Row>
    </>
}

const LinguaCertificataForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`linguaCertificatas[${index}].lingua`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`linguaCertificatas[${index}].livelloScritto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`linguaCertificatas[${index}].livelloOrale`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`linguaCertificatas[${index}].certificazione`}/>
            </Col>

        </Row>
    </>
}

const CompetenzeDigitaliForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`competenzaDigitales[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`competenzaDigitales[${index}].descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`competenzaDigitales[${index}].livello`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`competenzaDigitales[${index}].certificazione`}/>
            </Col>
        </Row>
    </>
}

const AltreCompetenzeForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`altraCompetenzas[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`altraCompetenzas[${index}].descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`altraCompetenzas[${index}].livello`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`altraCompetenzas[${index}].certificazione`}/>
            </Col>
        </Row>
    </>
}

const PatenteForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`patentes[${index}].descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`patentes[${index}].allegato`}/>
            </Col>
        </Row>
    </>
}
