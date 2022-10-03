import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues,
    anagraficaValidationSchema, domicilioInitialValues
} from "../../models/form/anagrafica/AnagraficaFormType";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../form-generator/form-elements/FormElement";
import {getCartellaSocialeAnagrafica} from "../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {modificaAnagrafica} from "../../api/cartellaSociale/anagraficaApi";
import {IterableForm} from "../../form-generator/form-elements/IterableForm";

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
            <Row className="mb-3">
                <Col xs={6}><FormElement accessor={"mediatore.nome"}/></Col>
            </Row>
            {/*<Row className="mb-3">
                <IterableForm initialValue={domicilioInitialValues} form={DomicilioForm} buttonLabel={"Aggiungi domicilio"} accessor={"domicilio"}/>
            </Row>*/}

            <IterableForm initialValue={{allegato:null}} form={DocumentiIdentitaForm} buttonLabel={"Aggiungi documento identità"} accessor={"documentoIdentitas"}/>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const DomicilioForm = (index:number) => {
    return <div>
        <FormElement accessor={`domicilio[${index}].tipologiaDomicilio`}/>
    </div>
}

const DocumentiIdentitaForm = (index:number) => {
    return <Row>
        <Col xs={12}>
            <FormElement accessor={`documentoIdentitas[${index}].descrizione`}/>
        </Col>
        <Col xs={12}>
            <FormElement accessor={`documentoIdentitas[${index}].allegato`}/>
        </Col>
    </Row>
}
