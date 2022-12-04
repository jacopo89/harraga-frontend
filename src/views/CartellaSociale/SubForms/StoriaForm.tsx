import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeStoria} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {storiaElements, storiaInitialValues, storiaValidationSchema} from "../../../models/form/storia/StoriaFormType";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import useGetPermission from "../../../permissions/useGetPermissions";
import DoubleDivider from "../../../components/DoubleDivider";

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

    const {canReadStoria, canWriteStoria}= useGetPermission();
    if(!canReadStoria && !canWriteStoria ) return <div>Non è consentito visualizzare questa scheda</div>

    return <div>
        <FormGeneratorContextProvider elements={storiaElements} validationSchema={storiaValidationSchema} onSubmit={onSubmit} initialValues={storiaInitialValues} existingValue={storia}>
            <DoubleDivider/>
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
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Famiglia di Origine</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"parentes"} nestedForm={ParenteForm}/>
                    </Col>
                </Row>

            </section>
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Percorso migratorio</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"percorsoMigratorios"} nestedForm={PercorsoMigratorioForm}/>
                    </Col>
                </Row>

            </section>
            <DoubleDivider/>
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
                <Divider className="my-3"></Divider>
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
                <Divider className="my-3"></Divider>
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
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Allontanamenti/Ritrovamenti</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"allontanamentos"} nestedForm={AllontanamentiForm}/>
                    </Col>
                </Row>
            </section>
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>PEI</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"progettoEducativoIndividuales"} nestedForm={PEIForm}/>
                    </Col>
                </Row>
            </section>
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Relazione Assistente Sociale</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"relazioneAssistenteSociales"} nestedForm={RelazioneAssistenteSocialeForm}/>
                    </Col>
                </Row>
            </section>
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Affido</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"affidos"} nestedForm={AffidoForm}/>
                    </Col>
                </Row>
            </section>
            <DoubleDivider/>
            <section>
                <Row>
                    <Col xs={12}>
                        <h3>Adozione</h3>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={"adoziones"} nestedForm={AdozioneForm}/>
                    </Col>
                </Row>
            </section>
            <DoubleDivider/>
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


            {canWriteStoria && <Button type="submit"> Salva</Button>}
        </FormGeneratorContextProvider>
    </div>
}

const ParenteForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`relazioneParentela`}/>
            </Col>
            <Col xs={6}>
                <Row className="mb-1">
                    <Col xs={12}>
                        <FormElement accessor={`nome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`cognome`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`email`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`telefono`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`paeseOrigine`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`inVita`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`inUE`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`note`}/>
                    </Col>
                    <Col xs={12}>
                        <FormElement accessor={`allegato`}/>
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
                <FormElement accessor={`annoPartenza`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`luogoPartenza`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`ragioniEspatrio`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`eventualiTimoriManifestati`}/>
            </Col>
        </Row>
    </>
}


const AllontanamentiForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`tipologia`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`luogo`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`comunicazione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`note`}/>
            </Col>
        </Row>
    </>
}


const PEIForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`descrizione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`comunicazione`}/>
            </Col>
        </Row>
    </>
}

const RelazioneAssistenteSocialeForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`descrizione`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`comunicazione`}/>
            </Col>
        </Row>
    </>
}


const AffidoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`ente`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}

const AdozioneForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`data`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`ente`}/>
            </Col>
            <Col xs={12}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}
