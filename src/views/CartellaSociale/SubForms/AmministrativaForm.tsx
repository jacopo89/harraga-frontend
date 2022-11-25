import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {
    amministrativaElements,
    amministrativaInitialValues,
    amministrativaValidationSchema
} from "../../../models/form/amministrativa/AmministrativaFormType";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeAmministrativa} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {modificaAmministrativa} from "../../../api/cartellaSociale/amministrativaApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

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
                <h3>Permessi di soggiorno</h3>
                <Row className="mb-3">
                    <Col xs={12}>
                        <FormElement accessor={"permessoSoggiornos"} nestedForm={PermessoSoggiornoForm}/>
                    </Col>

                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Procedure legali - amministrative</h3>
                <Row className="mb-3">
                    <Col xs={12}>
                        <FormElement accessor={"proceduraLegales"} nestedForm={ProceduraLegaleForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <h3>Provvedimenti giudiziari</h3>
                <Row className="mb-3">
                    <Col xs={12}>
                        <FormElement accessor={"provvedimentoGiudiziarios"} nestedForm={ProvvedimentoGiudiziarioForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Riferimento legale</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`riferimentoLegale.nome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`riferimentoLegale.cognome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`riferimentoLegale.email`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`riferimentoLegale.telefono`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Revoca della Tutela</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`revocaTutela.motivazione`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`riferimentoLegale.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Patto di accoglienza</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`pattoAccoglienza.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Tessera Sanitaria</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`tesseraSanitaria.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>STP</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`STP.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Codice Fiscale</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`codiceFiscale.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <FormElement accessor={"documentiIdentitaAmministrativas"} nestedForm={DocumentiIdentitaForm}/>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Foto segnalazione</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`fotoSegnalazione.data`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`fotoSegnalazione.ufficioCompetente`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`fotoSegnalazione.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Proseguimento amministrativo</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`proseguimentoAmministrativo.dataAttribuzione`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`proseguimentoAmministrativo.dataFinale`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`proseguimentoAmministrativo.note`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`proseguimentoAmministrativo.allegato`}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row className="mb-3">
                    <Col xs={12}>
                        <h3>Affidamento</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`affidamento.dataVerbaleAffidamento`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`affidamento.dataProvvedimentoAffidamento`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`affidamento.autoritaAffido`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`affidamento.verbaleAffidamento`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`affidamento.provvedimentoAffidamentoDefinitivo`}/>
                    </Col>
                </Row>
            </section>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const ProvvedimentoGiudiziarioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`data`}/>
            </Col>
            <Col xs={6}>
                <Row className="mb-1">
                    <Col xs={12}>
                        <FormElement accessor={`tipo`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`istituzioneEmittente`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`nomeAvvocato`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`allegato`}/>
                    </Col>
                </Row>
            </Col>
        </Row>

    </>
}


const PermessoSoggiornoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`stato`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`dataRichiesta`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`dataRilascio`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`rilasciatoDa`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`dataScadenza`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}


const ProceduraLegaleForm = (index:number) => {
    return <>
        <section>
            <h4>Regolamento di dublino</h4>
            <Row className="mb-1">
                <Col xs={12}>
                    <FormElement accessor={`regolamentoDublino.paeseOrigine`}/>
                </Col>
                <Col xs={12}>
                    <FormElement accessor={`regolamentoDublino.paeseArrivo`}/>
                </Col>
                <Col xs={12}>
                    <FormElement accessor={`regolamentoDublino.data`}/>
                </Col>
                <Col xs={12}>
                    <FormElement accessor={`regolamentoDublino.statoProcedura`}/>
                </Col>
                <Col xs={12}>
                    <FormElement accessor={`regolamentoDublino.allegato`}/>
                </Col>
            </Row>
        </section>
        <section>
            <h4>Appuntamenti</h4>
            <Row className="mb-3">
                <Col xs={12}>
                    <FormElement accessor={"appuntamenti"} nestedForm={AppuntamentiForm}/>
                </Col>
            </Row>
        </section>
        <section>
            <h4>Ricorsi amministrativi</h4>
            <Row className="mb-3">
                <Col xs={12}>
                    <FormElement accessor={"ricorsiAmministrativi"} nestedForm={RicorsiAmministrativiForm}/>
                </Col>
            </Row>
        </section>
    </>
}


const AppuntamentiForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`luogo`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`motivo`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`esiti`}/>
            </Col>
        </Row>
    </>
}

const RicorsiAmministrativiForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`dataInoltroRicorso`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`note`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`nomeAvvocato`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`patrocinioGratuito`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`esiti`}/>
            </Col>
        </Row>
    </>
}

const DocumentiIdentitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}
