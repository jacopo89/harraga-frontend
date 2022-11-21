import {FormElements} from "../../../../form-generator/ElementInterface";

export const specificaDisabilitaElements:FormElements = [
    {
        Header:"Disabilità",
        accessor:"disabilita",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]

export const specificaDisabilitaValues = {
    disabilita:null,
    allegato:null
}
