import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeDesideri} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {
    desideriFormElements,
    desideriInitialValues,
    desideriValidationSchema
} from "../../../models/form/desideri/DesideriFormType";
import {modificaDesideri} from "../../../api/cartellaSociale/desideriApi";
import useGetPermission from "../../../permissions/useGetPermissions";

export default function (){
    const params = useParams();
    const [desideri, setDesideri] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeDesideri(params.id).then(response => setDesideri(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaDesideri(desideri.id,values).then(response => toast.success("Scheda desideri modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    const {canReadDesideri, canWriteDesideri}= useGetPermission();
    if(!canReadDesideri && !canWriteDesideri ) return <div>Non è consentito visualizzare questa scheda</div>

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
            {canWriteDesideri && <Button type="submit"> Salva</Button>}
        </FormGeneratorContextProvider>
    </div>
}
