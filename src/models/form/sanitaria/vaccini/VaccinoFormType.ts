import {FormElements} from "../../../../form-generator/ElementInterface";

export const vaccinoElements:FormElements = [
    {
        Header:"Vaccino",
        accessor:"vaccino",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]

export const vaccinoInitialValues = {
    vaccino:null,
    allegato:null
}
