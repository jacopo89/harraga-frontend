import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";
import {IterableForm} from "../../../form-generator/form-elements/IterableForm";

import {useEffect, useState} from "react";
import {getCartellaSocialeStoria} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    sanitariaElements,
    sanitariaInitialValues,
    sanitariaValidationSchema
} from "../../../models/form/sanitaria/SanitariaFormType";
import {
    specificaDisabilitaValues
} from "../../../models/form/sanitaria/specificaDisabilitas/SpecificaDisabilitaFormType";
import {patologiaValues} from "../../../models/form/sanitaria/patologiaAllergicas/PatologiaAllergicaFormType";
import {vaccinoInitialValues} from "../../../models/form/sanitaria/vaccini/VaccinoFormType";
import {visitaInitialValues} from "../../../models/form/sanitaria/visite/VisiteFormType";

export default function (){
    const params = useParams();
    const [sanitaria, setSanitaria] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeStoria(params.id).then(response => setSanitaria(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(sanitaria.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={sanitariaElements} validationSchema={sanitariaValidationSchema} onSubmit={onSubmit} initialValues={sanitariaInitialValues} existingValue={sanitaria}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"specificaDisabilitas"} buttonLabel={"Aggiungi "} initialValue={specificaDisabilitaValues} form={SpecificaDisabilitaForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"patologiaAllergicas"} buttonLabel={"Aggiungi "} initialValue={patologiaValues} form={PatologiaForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
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
                    <Col xs={12}>
                        <IterableForm accessor={"vaccinos"} buttonLabel={"Aggiungi "} initialValue={vaccinoInitialValues} form={VaccinoForm}/>
                    </Col>
                </Row>
            </section>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <IterableForm accessor={"visitas"} buttonLabel={"Aggiungi "} initialValue={visitaInitialValues} form={VaccinoForm}/>
                    </Col>
                </Row>
            </section>

            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const SpecificaDisabilitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`specificaDisabilitas[${index}].disabilita`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`specificaDisabilitas[${index}].allegato`}/>
            </Col>
        </Row>

    </>
}

const PatologiaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`patologiaAllergicas[${index}].patologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`patologiaAllergicas[${index}].allegato`}/>
            </Col>
        </Row>

    </>
}

const VaccinoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`vaccinos[${index}].vaccino`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`vaccinos[${index}].allegato`}/>
            </Col>
        </Row>

    </>
}

const VisitaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].tipo`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].presidioOspedaliero`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].UO`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].data`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].nomeMedico`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].cognomeMedico`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].emailMedico`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].telefonoMedico`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`visitas[${index}].allegato`}/>
            </Col>
        </Row>

    </>
}
