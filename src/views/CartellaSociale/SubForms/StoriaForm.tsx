import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {IterableForm} from "../../../form-generator/form-elements/IterableForm";

import {useEffect, useState} from "react";
import {getCartellaSocialeStoria} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {storiaElements, storiaInitialValues, storiaValidationSchema} from "../../../models/form/storia/StoriaFormType";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {parentesInitialValue} from "../../../models/form/storia/parenti/ParenteFormType";
import {percorsoMigratorioValues} from "../../../models/form/storia/percorsoMigratorio/percorsoMigratorioType";
import {allontanamentiValues} from "../../../models/form/storia/allontanamento/AllontanamentoFormType";
import {PEIValues} from "../../../models/form/storia/pei/PEIFormType";
import {
    RelazioneAssistenteSocialeValues
} from "../../../models/form/storia/relazioneAssistenteSociale/RelazioneAssistenteSocialeFormType";
import {affidoValues} from "../../../models/form/storia/affido/AffidoFormType";
import {adozioneValues} from "../../../models/form/storia/adozione/AdozioneFormType";

export default function (){
    const params = useParams();
    const [storia, setStoria] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeStoria(params.id).then(response => setStoria(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(storia.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={storiaElements} validationSchema={storiaValidationSchema} onSubmit={onSubmit} initialValues={storiaInitialValues} existingValue={storia}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"etnia"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"particolariOsservanze"}/>
                    </Col>
                </Row>

            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Famiglia di Origine</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"parentes"} buttonLabel={"Aggiungi parente"} initialValue={parentesInitialValue} form={ParenteForm}/>
                    </Col>
                </Row>

            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Percorso migratorio</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"percorsoMigratorios"} buttonLabel={"Aggiungi percorso migratorio"} initialValue={percorsoMigratorioValues} form={PercorsoMigratorioForm}/>
                    </Col>
                </Row>

            </section>

            <section>
                <Row>
                    <Col xs={12}>
                        <h2>Accoglienza in Italia</h2>
                    </Col>
                    <Col xs={12}>
                        <h3>Hotspot</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"hotspot.nome"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"hotspot.dataIngresso"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"hotspot.dataUscita"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3>CPA</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"cPA.nome"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"cPA.dataIngresso"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"cPA.dataUscita"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3>Seconda Accoglienza</h3>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.secondaAccoglienza"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.tipologia"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.nomeResponsabile"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.cognomeResponsabile"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.emailResponsabile"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.telefonoResponsabile"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.dataIngresso"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"secondaAccoglienza.dataUscita"}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Allontanamenti/Ritrovamenti</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"allontanamentos"} buttonLabel={"Aggiungi "} initialValue={allontanamentiValues} form={AllontanamentiForm}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>PEI</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"progettoEducativoIndividuales"} buttonLabel={"Aggiungi "} initialValue={PEIValues} form={PEIForm}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Relazione Assistente Sociale</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"relazioneAssistenteSociales"} buttonLabel={"Aggiungi "} initialValue={RelazioneAssistenteSocialeValues} form={RelazioneAssistenteSocialeForm}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Affido</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"affidos"} buttonLabel={"Aggiungi "} initialValue={affidoValues} form={AffidoForm}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Adozione</h3>
                    </Col>
                    <Col xs={12}>
                        <IterableForm accessor={"adoziones"} buttonLabel={"Aggiungi "} initialValue={adozioneValues} form={AdozioneForm}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Valutazione multidisciplinare</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"valutazioneMultidisciplinare.tipologia"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"valutazioneMultidisciplinare.valutazione"}/>
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Storia personale</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"informazioniVitaMinore"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"scuola"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"hobbies"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"ragioniEspatrio"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"timoriManifestatiRientroPaeseOrigine"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"informazioniViaggioPaeseOrigine"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"osservazioniEducatori"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"areaMultidisciplinare"}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"diarioInterventi"}/>
                    </Col>
                </Row>
            </section>


            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const ParenteForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`parentes[${index}].relazioneParentela`}/>
            </Col>
            <Col xs={6}>
                <Row className="mb-1">
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].nome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].cognome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].email`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].telefono`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].paeseOrigine`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].inVita`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].inUE`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].note`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`parentes[${index}].allegato`}/>
                    </Col>
                </Row>
            </Col>
        </Row>

    </>
}


const PercorsoMigratorioForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`percorsoMigratorios[${index}].annoPartenza`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`percorsoMigratorios[${index}].luogoPartenza`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`percorsoMigratorios[${index}].ragioniEspatrio`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`percorsoMigratorios[${index}].eventualiTimoriManifestati`}/>
            </Col>
        </Row>
    </>
}


const AllontanamentiForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`allontanamentos[${index}].tipologia`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allontanamentos[${index}].data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allontanamentos[${index}].luogo`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allontanamentos[${index}].comunicazione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allontanamentos[${index}].note`}/>
            </Col>
        </Row>
    </>
}


const PEIForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`progettoEducativoIndividuales[${index}].descrizione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`progettoEducativoIndividuales[${index}].comunicazione`}/>
            </Col>
        </Row>
    </>
}

const RelazioneAssistenteSocialeForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`relazioneAssistenteSociales[${index}].descrizione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`relazioneAssistenteSociales[${index}].comunicazione`}/>
            </Col>
        </Row>
    </>
}


const AffidoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`affidos[${index}].data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`affidos[${index}].ente`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`affidos[${index}].allegato`}/>
            </Col>
        </Row>
    </>
}

const AdozioneForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`adoziones[${index}].data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`adoziones[${index}].ente`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`adoziones[${index}].allegato`}/>
            </Col>
        </Row>
    </>
}
