import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues,
    anagraficaValidationSchema
} from "../../../models/form/anagrafica/AnagraficaFormType";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {useEffect, useState} from "react";
import {getCartellaSocialeAnagrafica} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {modificaAnagrafica} from "../../../api/cartellaSociale/anagraficaApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

export default function (){
    const params = useParams();
    const [anagrafica, setAnagrafica] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeAnagrafica(params.id).then(response => setAnagrafica(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaAnagrafica(anagrafica.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={anagraficaElements} validationSchema={anagraficaValidationSchema} onSubmit={onSubmit} initialValues={anagraficaInitialValues} existingValue={anagrafica}>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"nome"}/></Col>
                    <Col xs={6}><FormElement accessor={"cognome"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"altroNome"}/></Col>
                    <Col xs={6}><FormElement accessor={"numeroTutela"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"italiano"}/></Col>
                    <Col xs={6}><FormElement accessor={"alias"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12}><FormElement accessor={"sesso"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"luogoNascita"}/></Col>
                    <Col xs={6}><FormElement accessor={"paeseOrigine"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"cittadinanza"}/></Col>
                    <Col xs={6}><FormElement accessor={"dataNascitaPrimaIdentificazione"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"dataNascitaCorretta"}/></Col>
                    <Col xs={6}><FormElement accessor={"linguaMadre"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"gruppoEtnicoAppartenenza"}/></Col>
                    <Col xs={6}><FormElement accessor={"dataArrivoInItalia"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"luogoArrivoInItalia"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Contatti del minore</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"email"}/></Col>
                    <Col xs={6}><FormElement accessor={"telefono"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>UO</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"unitaOperativa"}/></Col>
                    <Col xs={6}><FormElement accessor={"dataAssegnazioneUO"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Mediatore linguistico / culturale</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"mediatore.nome"}/></Col>
                    <Col xs={6}><FormElement accessor={"mediatore.cognome"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"mediatore.email"}/></Col>
                    <Col xs={6}><FormElement accessor={"mediatore.telefono"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Domicilio/accoglienza</h3>
                <Row className="mb-3">
                    <FormElement accessor={"domicilios"} nestedForm={DomicilioForm}/>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Documenti di identità</h3>
                <Row className="mb-3">
                    <FormElement accessor={"documentoIdentitas"} nestedForm={DocumentiIdentitaForm}/>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Assistente sociale</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"assistenteSociale.nome"}/></Col>
                    <Col xs={6}><FormElement accessor={"assistenteSociale.cognome"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"assistenteSociale.email"}/></Col>
                    <Col xs={6}><FormElement accessor={"assistenteSociale.telefono"}/></Col>
                </Row>
            </section>
            <section>
                <h3>Tutore</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.nome"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.cognome"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.email"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.telefono"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.numeroTutela"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.dataAssegnazione"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.luogoAssegnazione"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.motivazioneTutela"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.tribunaleMinori"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.giudiceTutelare"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"tutore.rettificaTutela"}/></Col>
                    <Col xs={6}><FormElement accessor={"tutore.decretoTribunale"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Polizza assicurativa</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"polizzaAssicurativa.tipologia"}/></Col>
                    <Col xs={6}><FormElement accessor={"polizzaAssicurativa.numero"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"polizzaAssicurativa.dataInizio"}/></Col>
                    <Col xs={6}><FormElement accessor={"polizzaAssicurativa.dataFine"}/></Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"polizzaAssicurativa.allegato"}/></Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Documenti in possesso all'arrivo</h3>
                <Row className="mb-3">
                    <Col xs={6}><FormElement accessor={"documentiPossesso.tipologia"}/></Col>
                    <Col xs={6}><FormElement accessor={"documentiPossesso.allegato"}/></Col>
                </Row>
            </section>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const DomicilioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipologiaDomicilio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`nome`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipoInserimento`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`responsabile`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`email`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefono`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tempoPermanenzaPrevisto`}/>
            </Col>
        </Row>
    </>
}

const DocumentiIdentitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`descrizione`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`note`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}
