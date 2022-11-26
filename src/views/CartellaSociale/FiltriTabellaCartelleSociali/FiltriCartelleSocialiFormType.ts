import {FormElements} from "../../../form-generator/ElementInterface";
import * as Yup from "yup";

export const filtriElements:FormElements = [
    {
        Header:"Nome",
        accessor:"anagrafica",
        type:"embedded",
        formElements:[
            {
                Header:"Nome",
                accessor:"nome",
                type:"text"
            },
            {
                Header:"Cognome",
                accessor:"cognome",
                type:"text"
            },
            {
                Header:"Paese origine",
                accessor:"paeseOrigine",
                type:"countries"
            },
            {
                Header:"Italiano",
                accessor:"italiano",
                type:"checkbox"
            }
        ],
        initialValues: {nome:null}
    }
]

export const filtriInitialValues = {
    anagrafica:null,
}

export const filtriValidationSchema = Yup.object().shape({

});
