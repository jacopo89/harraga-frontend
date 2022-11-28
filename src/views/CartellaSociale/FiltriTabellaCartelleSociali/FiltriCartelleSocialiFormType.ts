import * as Yup from "yup";
import {FilterElements} from "../../../form-generator/filter-elements/FilterElementInterface";

export const filtriElements:FilterElements = [
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
            },
            {
                Header:"Maggiorenne",
                accessor:"maggiorenne",
                type:"checkbox"
            },
            {
                Header:"Data Nascita corretta",
                accessor:"dataNascitaCorretta",
                type:"date"
            }
        ],
        initialValues: {nome:null}
    },
    {
        Header:"cognome",
        accessor:"cognome",
        type:"text"
    }
]

export const filtriInitialValues = {
    anagrafica:null,
}

export const filtriValidationSchema = Yup.object().shape({

});
