import {FormElements} from "../../../../form-generator/ElementInterface";

export const patologiaAllergicaElements:FormElements = [
    {
        Header:"Patologia",
        accessor:"patologia",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]

export const patologiaValues = {
    patologia:null,
    allegato:null
}
