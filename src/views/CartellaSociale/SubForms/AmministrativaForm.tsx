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
    permessoSoggiornoInitialValues
} from "../../../models/form/amministrativa/permessoSoggiorno/PermessoSoggiornoType";
import {
    provvedimentoGiudiziarioInitialValues
} from "../../../models/form/amministrativa/provvedimentoGiudiziario/ProvvedimentoGiudiziarioType";
import {
    proceduraLegaleInitialValues
} from "../../../models/form/amministrativa/proceduraLegale/ProceduraLegaleType";
import {
    appuntamentiInitialValues
} from "../../../models/form/amministrativa/proceduraLegale/appuntamenti/AppuntamentiType";
import {documentiIdentitaElements} from "../../../models/form/anagrafica/documentoIdentita/DocumentoIdentitaType";

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
           {/* <section>
                <Row className="mb-3">
                    <IterableForm initialValue={permessoSoggiornoInitialValues} form={PermessoSoggiornoForm} buttonLabel={"Aggiungi permesso soggiorno"} accessor={"permessoSoggiornos"}/>
                </Row>
            </section>
            <Divider className="mb-3"/>*/}
            <section>
                <Row className="mb-3">
                    <FormElement accessor={"proceduraLegales"} nestedForm={ProceduraLegaleForm}/>
                    {/*<IterableForm initialValue={proceduraLegaleInitialValues} form={ProceduraLegaleForm} buttonLabel={"Aggiungi procedura legale"} accessor={"proceduraLegales"}/>*/}
                </Row>
            </section>
            <Divider className="mb-3"/>
            {/*<section>
                <Row className="mb-3">
                    <IterableForm initialValue={provvedimentoGiudiziarioInitialValues} form={ProvvedimentoGiudiziarioForm} buttonLabel={"Aggiungi provvedimento giudiziario"} accessor={"provvedimentoGiudiziarios"}/>
                </Row>
            </section>*/}
           {/* <Divider className="mb-3"/>
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
                    <IterableForm initialValue={documentiIdentitaElements} form={DocumentiIdentitaForm} buttonLabel={"Aggiungi documento di identità"} accessor={"documentiIdentitaAmministrativas"}/>
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
            </section>*/}
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const ProvvedimentoGiudiziarioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`provvedimentoGiudiziarios[${index}].data`}/>
            </Col>
            <Col xs={6}>
                <Row className="mb-1">
                    <Col xs={12}>
                        <FormElement accessor={`provvedimentoGiudiziarios[${index}].tipo`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`provvedimentoGiudiziarios[${index}].istituzioneEmittente`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`provvedimentoGiudiziarios[${index}].nomeAvvocato`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`provvedimentoGiudiziarios[${index}].allegato`}/>
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


const ProceduraLegaleForm = (index:number) => {
    return <>
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
        <Row className="mb-3">
            <FormElement accessor={"appuntamenti"} nestedForm={AppuntamentiForm}></FormElement>
            {/*<IterableForm initialValue={appuntamentiInitialValues} form={AppuntamentiForm} buttonLabel={"Aggiungi appuntamento"} accessor={`proceduraLegales.appuntamenti`}/>*/}
        </Row>
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

const DocumentiIdentitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`documentiIdentitaAmministrativas[${index}].allegato`}/>
            </Col>
        </Row>
    </>
}
