import {FormElements} from "../../../../form-generator/ElementInterface";

export const patenteElements:FormElements = [
    {
        Header:"Descrizione",
        accessor:"descrizione",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]

export const patenteInitialValues = {
    descrizione:null,
    allegato:null
}
