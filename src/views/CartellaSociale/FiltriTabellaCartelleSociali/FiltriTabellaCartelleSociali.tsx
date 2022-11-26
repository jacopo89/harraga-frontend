import FormGeneratorContextProvider from "../../../form-generator/form-context/FormGeneratorContextProvider";
import {filtriElements, filtriInitialValues} from "./FiltriCartelleSocialiFormType";
import {Col, Row} from "react-bootstrap";
import FormElement from "../../../form-generator/form-elements/FormElement";

export default function (){
    return <div>
        <FormGeneratorContextProvider elements={filtriElements} initialValues={filtriInitialValues}>
            <Row>
                <Col xs={6}>
                   <FormElement accessor={"anagrafica.nome"}/>
                </Col>
            </Row>
        </FormGeneratorContextProvider>
    </div>
}
