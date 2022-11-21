import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {IterableForm} from "../../../form-generator/form-elements/IterableForm";

import {useEffect, useState} from "react";
import {getCartellaSocialeSocialita} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    socialitaElements,
    socialitaInitialValues,
    socialitaValidationSchema
} from "../../../models/form/socialita/SocialitaFormType";
import {
    esperienzeInitialValues
} from "../../../models/form/socialita/esperienzeVolontariato/EsperienzeVolontariatoFormType";
import {laboratorioInitialValues} from "../../../models/form/socialita/laboratori/LaboratorioFormType";
import {attivitaSportivaInitialValues} from "../../../models/form/socialita/attivitaSportiva/AttivitaSportivaFormType";
import {associazioneInitialValues} from "../../../models/form/socialita/associazione/AssociazioneFormType";

export default function (){
    const params = useParams();
    const [socialita, setSocialita] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeSocialita(params.id).then(response => setSocialita(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(socialita.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={socialitaElements} validationSchema={socialitaValidationSchema} onSubmit={onSubmit} initialValues={socialitaInitialValues} existingValue={socialita}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"esperienzaVolontariatos"} buttonLabel={"Aggiungi "} initialValue={esperienzeInitialValues} form={EsperienzeVolontariatoForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"laboratorios"} buttonLabel={"Aggiungi "} initialValue={laboratorioInitialValues} form={LaboratorioForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"attivitaSportivas"} buttonLabel={"Aggiungi "} initialValue={attivitaSportivaInitialValues} form={AttivitaSportivaForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"associaziones"} buttonLabel={"Aggiungi "} initialValue={associazioneInitialValues} form={AssociazioneForm}/>
                    </Col>
                </Row>
            </section>

            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const EsperienzeVolontariatoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].stato`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].competenzeAcquisite`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`esperienzaVolontariatos[${index}].telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const LaboratorioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`laboratorios[${index}].telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const AttivitaSportivaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`attivitaSportivas[${index}].telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const AssociazioneForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].tipo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`associaziones[${index}].telefonoReferente`}/>
            </Col>
        </Row>

    </>
}
