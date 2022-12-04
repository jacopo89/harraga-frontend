import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeLavoro} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {
    lavoroFormElements,
    lavoroInitialValues,
    lavoroValidationSchema
} from "../../../models/form/lavoro/LavoroFormType";
import {modificaLavoro} from "../../../api/cartellaSociale/lavoroApi";
import useGetPermission from "../../../permissions/useGetPermissions";

export default function (){
    const params = useParams();
    const [lavoro, setLavoro] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeLavoro(params.id).then(response => setLavoro(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaLavoro(lavoro.id,values).then(response => toast.success("Anagrafica modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    const {canReadLavoro, canWriteLavoro}= useGetPermission();
    if(!canReadLavoro && !canWriteLavoro ) return <div>Non è consentito visualizzare questa scheda</div>

    return <div>
        <FormGeneratorContextProvider elements={lavoroFormElements} validationSchema={lavoroValidationSchema} onSubmit={onSubmit} initialValues={lavoroInitialValues} existingValue={lavoro}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Esperienze lavorative</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"esperienzaLavorativas"} nestedForm={EsperienzaLavorativaForm} />
                    </Col>
                </Row>
            </section>
            {canWriteLavoro && <Button type="submit"> OK</Button>}
        </FormGeneratorContextProvider>
    </div>
}

const EsperienzaLavorativaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`stato`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`ambitiLavorativi`}/>
            </Col>

        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`dataFine`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`nomeAzienda`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`luogoAzienda`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`emailAzienda`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`telefonoAzienda`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`competenzeAcquisite`}/>
            </Col>
        </Row>

    </>
}
