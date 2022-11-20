import {FormElements} from "../../../../form-generator/ElementInterface";

export const affidoFormElements :FormElements = [
    {
        Header:"Data affido",
        type:"date",
        accessor:"data"
    },
    {
        Header:"Ente",
        type:"text",
        accessor:"ente"
    },
    {
        Header:"Allegato",
        type:"file",
        accessor:"allegato"
    }
]

export const affidoValues = {
    data:null,
    ente:null,
    allegato:null
}
