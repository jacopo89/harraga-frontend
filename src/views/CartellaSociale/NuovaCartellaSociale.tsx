import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues, domicilioInitialValues,
    validationSchema
} from "../../models/form/anagrafica/AnagraficaFormType";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../form-generator/form-elements/FormElement";
import {useNavigate} from "react-router";
import {IterableForm} from "../../form-generator/form-elements/IterableForm";
import {postCartellaSociale} from "../../api/cartellaSociale/cartellaSocialeApi";
import {editCartellaSocialeRoute} from "../../routes/frontend-routes";
import {toast} from "react-toastify";

export default function (){

    const navigate = useNavigate();
    const onSubmit = (values:any) => {
        console.log("values",values)
        postCartellaSociale(values).then(response => navigate(editCartellaSocialeRoute(response.data.id))).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={anagraficaElements} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={anagraficaInitialValues}>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.nome"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.cognome"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.altroNome"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.numeroTutela"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.italiano"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.alias"}/></Col>
            </Row>
            <Row>
                <Col xs={12}><FormElement accessor={"anagrafica.sesso"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.luogoNascita"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.paeseOrigine"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.cittadinanza"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.dataNascitaPrimaIdentificazione"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.dataNascitaCorretta"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.linguaMadre"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.gruppoEtnicoAppartenenza"}/></Col>
                <Col xs={6}><FormElement accessor={"anagrafica.dataArrivoInItalia"}/></Col>
            </Row>
            <Row>
                <Col xs={6}><FormElement accessor={"anagrafica.luogoArrivoInItalia"}/></Col>

            </Row>

            <FormElement accessor={"anagrafica.cognome"}/>
            <FormElement accessor={"anagrafica.italiano"}/>
            <FormElement accessor={"anagrafica.numeroTutela"}/>
            <IterableForm initialValue={domicilioInitialValues} form={DomicilioForm} buttonLabel={"Aggiungi domicilio"} accessor={"anagrafica.domicilio"}/>
            <IterableForm initialValue={{allegato:null}} form={DocumentiIdentitaForm} buttonLabel={"Aggiungi documento identità"} accessor={"anagrafica.documentoIdentitas"}/>
            <Button type="submit"> OK</Button>mah
        </FormGeneratorContextProvider>
    </div>
}

const DomicilioForm = (index:number) => {
    return <div>
        <FormElement accessor={`anagrafica.domicilio[${index}].tipologiaDomicilio`}/>
    </div>
}

const DocumentiIdentitaForm = (index:number) => {
    return <div>
        <FormElement accessor={`anagrafica.documentoIdentitas[${index}].allegato`}/>
    </div>
}
