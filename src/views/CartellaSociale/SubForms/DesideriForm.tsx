import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeDesideri} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    desideriFormElements,
    desideriInitialValues,
    desideriValidationSchema
} from "../../../models/form/desideri/DesideriFormType";

export default function (){
    const params = useParams();
    const [desideri, setDesideri] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeDesideri(params.id).then(response => setDesideri(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaStoria(desideri.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={desideriFormElements} validationSchema={desideriValidationSchema} onSubmit={onSubmit} initialValues={desideriInitialValues} existingValue={desideri}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"aspirazioni"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"ascoltoMinore"}/>
                    </Col>
                </Row>
            </section>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}
