import {FormElements} from "../../../../form-generator/ElementInterface";

export const medicoCuranteElements:FormElements = [
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

export const medicoCuranteValues = {
    nome:null,
    cognome:null,
    email:null,
    telefono:null,
    allegato:null,
}
