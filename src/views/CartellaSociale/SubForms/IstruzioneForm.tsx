import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {Divider} from "@mui/material";
import {Button, Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

import {useEffect, useState} from "react";
import {getCartellaSocialeIstruzione} from "../../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {modificaStoria} from "../../../api/cartellaSociale/storiaApi";
import {
    istruzioneFormElements,
    istruzioneInitialValues,
    istruzioneValidationSchema
} from "../../../models/form/istruzione/IstruzioneFormType";
import DoubleDivider from "../../../components/DoubleDivider";
import {modificaIstruzione} from "../../../api/cartellaSociale/istruzioneApi";
import useGetPermission from "../../../permissions/useGetPermissions";

export default function (){
    const params = useParams();
    const [istruzione, setIstruzione] = useState()
    useEffect(()=>{
        // @ts-ignore
        getCartellaSocialeIstruzione(params.id).then(response => setIstruzione(response.data))
    },[])

    const onSubmit = (values:any) => {
        // @ts-ignore
        modificaIstruzione(istruzione.id,values).then(response => toast.success("Scheda istruzione modificata con successo")).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    const {canWriteIstruzione, canReadIstruzione}= useGetPermission();
    if(!canReadIstruzione && !canWriteIstruzione ) return <div>Non è consentito visualizzare questa scheda</div>

    return <div>
        <FormGeneratorContextProvider elements={istruzioneFormElements} validationSchema={istruzioneValidationSchema} onSubmit={onSubmit} initialValues={istruzioneInitialValues} existingValue={istruzione}>
            <Divider className="mb-3"/>
            <section>
                <Row>
                    <Col xs={12}><h3>Percorsi d'istruzione e formazione nel paese d'origine</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"percorsoIstruzioneOrigines"} nestedForm={PercorsoIstruzioneOrigineForm} />
                    </Col>
                </Row>
            </section>
            <DoubleDivider></DoubleDivider>
            <section>
                <Row>
                    <Col xs={12}><h3>Percorsi d'istruzione e formazione in Italia conclusi</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"percorsoIstruzioneItaliaConclusos"} nestedForm={PercorsoIstruzioneItaliaConclusoForm} />
                    </Col>
                </Row>
            </section>
            <DoubleDivider></DoubleDivider>
            <section>
                <Row>
                    <Col xs={12}><h3>Percorsi d'istruzione e formazione in corso in Italia</h3></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FormElement accessor={"percorsoIstruzioneFormazioneItalias"} nestedForm={PercorsoIstruzioneItaliaForm} />
                    </Col>
                </Row>
            </section>
            {canWriteIstruzione && <Button type="submit"> Salva</Button>}
        </FormGeneratorContextProvider>
    </div>
}

const PercorsoIstruzioneOrigineForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`saLeggere`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`saScrivere`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>

        </Row>
    </>
}

const PercorsoIstruzioneItaliaConclusoForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`tipologia`}/>
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
                <FormElement accessor={`istituto`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`allegato`}/>
            </Col>
        </Row>
    </>
}

const PercorsoIstruzioneItaliaForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`tipologia`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`indirizzoStudi`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`dataInizio`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`dataFinePrevista`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`classe`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`istituto`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`orariGiorni`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`progettoFormativo`}/>
            </Col>
            <Col xs={6}>
                <FormElement accessor={`pattoFormativo`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`bilancioCompetenze`}/>
            </Col>
        </Row>
        <Row className="mb-1">
            <Col xs={6}>
                <FormElement accessor={`valutaziones`} nestedForm={ValutazioneForm}/>
            </Col>
        </Row>
    </>
}

const ValutazioneForm = (index:number) => {
    return <>
        <Row className="mb-1">
            <Col xs={12}>
                <FormElement accessor={`valutazione`}/>
            </Col>
        </Row>
    </>
}
