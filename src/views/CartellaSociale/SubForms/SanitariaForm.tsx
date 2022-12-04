import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeSanitaria, getCartellaSocialeStoria} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    sanitariaElements,
    sanitariaInitialValues,
    sanitariaValidationSchema
} from "../../../models/form/sanitaria/SanitariaFormType";
import {modificaSanitaria} from "../../../api/cartellaSociale/sanitariaApi";

export default function (){
    const params = useParams();
    const [sanitaria, setSanitaria] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeSanitaria(params.id).then(response => setSanitaria(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaSanitaria(sanitaria.id,values).then(response => toast.success("Scheda sanitaria modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={sanitariaElements} validationSchema={sanitariaValidationSchema} onSubmit={onSubmit} initialValues={sanitariaInitialValues} existingValue={sanitaria}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Disabilità</h3></Col>
                    <Col xs={12}>
                        <FormElement accessor={"specificaDisabilitas"} nestedForm={SpecificaDisabilitaForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Patologie</h3></Col>
                    <Col xs={12}>
                        <FormElement accessor={"patologiaAllergicas"} nestedForm={PatologiaForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Medico curante assegnato</h3></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"medicoCurante.nome"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"medicoCurante.cognome"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"medicoCurante.email"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"medicoCurante.telefono"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"medicoCurante.allegato"}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Preso in carico da altri servizi</h3></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"presoInCarico.nome"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"presoInCarico.cognome"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"presoInCarico.email"}/>
                    </Col>
                    <Col xs={6}>
                        <FormElement accessor={"presoInCarico.telefono"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FormElement accessor={"presoInCarico.allegato"}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Vaccini</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"vaccinos"} nestedForm={VaccinoForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Row>
                        <Col xs={12}><h3>Visite/incontri/interventi/esami</h3></Col>
                    </Row>
                    <Col xs={12}>
                        <FormElement accessor={"visitas"} nestedForm={VisitaForm}/>
                    </Col>
                </Row>
            </section>

            <Button type="submit">Salva</Button>
        </FormGeneratorContextProvider>
    </div>
}

const SpecificaDisabilitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`disabilita`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>

    </>
}

const PatologiaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`patologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>

    </>
}

const VaccinoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`vaccino`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>

    </>
}

const VisitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipo`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`presidioOspedaliero`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`UO`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`data`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeMedico`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`cognomeMedico`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailMedico`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoMedico`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>

    </>
}
