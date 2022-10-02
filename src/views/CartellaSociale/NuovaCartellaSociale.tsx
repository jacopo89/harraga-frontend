import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues
} from "../../models/form/anagrafica/AnagraficaFormType";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../form-generator/form-elements/FormElement";
import {postCartellaSociale} from "../../api/cartellaSociale/cartellaSocialeApi";
import {useNavigate} from "react-router";
import {editCartellaSocialeRoute} from "../../routes/frontend-routes";
import {toast} from "react-toastify";

export default function (){

    const navigate = useNavigate();
    const onSubmit = (values:any) => {
        console.log("values",values)
        //postCartellaSociale(values).then(response => navigate(editCartellaSocialeRoute(response.data.id))).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={anagraficaElements} onSubmit={onSubmit} initialValues={anagraficaInitialValues}>
            <FormElement accessor={"anagrafica"} nestedForm={FormAnagrafica}></FormElement>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const FormAnagrafica = <Row>
    <Col xs={6}>
        <FormElement accessor={"nome"}/>
    </Col>
    <Col xs={6}>
        <FormElement accessor={"cognome"}/>
    </Col>
</Row>
