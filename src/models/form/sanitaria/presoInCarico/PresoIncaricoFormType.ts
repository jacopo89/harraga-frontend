import {FormElements} from "../../../../form-generator/ElementInterface";

export const presoInCaricoElements:FormElements = [
    {
        Header:"Nome",
        accessor:"nome",
        type:"text",
    },
    {
        Header:"Cognome",
        accessor:"cognome",
        type:"text",
    },
    {
        Header:"Email",
        accessor:"email",
        type:"text",
    },
    {
        Header:"Telefono",
        accessor:"telefono",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]