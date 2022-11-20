import {FormElements} from "../../../../form-generator/ElementInterface";

export const adozioneFormElements :FormElements = [
    {
        Header:"Data adozione",
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

export const adozioneValues = {
    data:null,
    ente:null,
    allegato:null
}
