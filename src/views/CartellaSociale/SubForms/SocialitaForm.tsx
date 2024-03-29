import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeSocialita} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {
    socialitaElements,
    socialitaInitialValues,
    socialitaValidationSchema
} from "../../../models/form/socialita/SocialitaFormType";
import DoubleDivider from "../../../components/DoubleDivider";
import {modificaSocialita} from "../../../api/cartellaSociale/socialitaApi";

export default function (){
    const params = useParams();
    const [socialita, setSocialita] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeSocialita(params.id).then(response => setSocialita(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaSocialita(socialita.id,values).then(response => toast.success("Scheda socialità modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={socialitaElements} validationSchema={socialitaValidationSchema} onSubmit={onSubmit} initialValues={socialitaInitialValues} existingValue={socialita}>
            <DoubleDivider/>
            <section>
                <Row>
                    <Row>
                        <Col xs={12}><h3>Esperienze di volontariato</h3></Col>
                    </Row>
                    <Col xs={12}>
                        <FormElement accessor={"esperienzaVolontariatos"} nestedForm={EsperienzeVolontariatoForm} />
                    </Col>
                </Row>
            </section>
            <DoubleDivider></DoubleDivider>
            <section>
                <Row>
                    <Col xs={12}><h3>Laboratori</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"laboratorios"} nestedForm={LaboratorioForm} />
                    </Col>
                </Row>
            </section>
            <DoubleDivider></DoubleDivider>
            <section>
                <Row>
                    <Col xs={12}><h3>Attività sportiva</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"attivitaSportivas"} nestedForm={AttivitaSportivaForm} />
                    </Col>
                </Row>
            </section>
            <DoubleDivider></DoubleDivider>
            <section>
                <Row>
                    <Col xs={12}><h3>Appartenenza a gruppi/associazioni</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"associaziones"} nestedForm={AssociazioneForm} />
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
                <FormElement accessor={`stato`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
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
                <FormElement accessor={`competenzeAcquisite`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const LaboratorioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
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
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const AttivitaSportivaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
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
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoReferente`}/>
            </Col>
        </Row>

    </>
}

const AssociazioneForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`pregressa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
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
                <FormElement accessor={`certificazione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeReferente`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailReferente`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoReferente`}/>
            </Col>
        </Row>

    </>
}
