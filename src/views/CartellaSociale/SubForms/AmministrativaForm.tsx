import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {
    amministrativaElements,
    amministrativaInitialValues,
    amministrativaValidationSchema
} from "../../../models/form/amministrativa/AmministrativaFormType";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {IterableForm} from "../../../form-generator/form-elements/IterableForm";

import {useEffect, useState} from "react";
import {getCartellaSocialeAmministrativa} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {modificaAmministrativa} from "../../../api/cartellaSociale/amministrativaApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {
    permessoSoggiornoInitialForm
} from "../../../models/form/amministrativa/permessoSoggiorno/PermessoSoggiornoType";

export default function (){
    const params = useParams();
    const [amministrativa, setAmministrativa] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeAmministrativa(params.id).then(response => setAmministrativa(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaAmministrativa(amministrativa.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={amministrativaElements} validationSchema={amministrativaValidationSchema} onSubmit={onSubmit} initialValues={amministrativaInitialValues} existingValue={amministrativa}>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <IterableForm initialValue={permessoSoggiornoInitialForm} form={PermessoSoggiornoForm} buttonLabel={"Aggiungi permesso di soggiorno"} accessor={"permessoSoggiornos"}/>
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

                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Documenti di identità</h3>
                <Row className="mb-3">
                    {/*<IterableForm initialValue={{allegato:null}} form={DocumentiIdentitaForm} buttonLabel={"Aggiungi documento identità"} accessor={"permessoSoggiornos"}/>*/}
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
                <FormElement accessor={`domicilios[${index}].tipologiaDomicilio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].nome`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].tipoInserimento`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].responsabile`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].email`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].telefono`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`domicilios[${index}].tempoPermanenzaPrevisto`}/>
            </Col>
        </Row>
    </>
}

const PermessoSoggiornoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`permessoSoggiornos[${index}].stato`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].dataRichiesta`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].dataRilascio`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].rilasciatoDa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].dataScadenza`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].tipologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`permessoSoggiornos[${index}].allegato`}/>
            </Col>
        </Row>
    </>
}
