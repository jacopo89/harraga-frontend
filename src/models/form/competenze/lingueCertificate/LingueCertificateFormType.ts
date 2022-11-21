import {FormElements} from "../../../../form-generator/ElementInterface";

export const  lingueCertificateElements:FormElements = [
    {
        Header:"Lingua",
        accessor:"lingua",
        type:"text"
    },
    {
        Header:"Livello scritto",
        accessor:"livelloScritto",
        type:"select",
        options:[
            {label:"Avanzato C1-C2", value:"avanzato"},
            {label:"Medio B1-B2", value:"medio"},
            {label:"Base A1-A2", value:"base"},
        ]
    },
    {
        Header:"Livello Orale",
        accessor:"livelloOrale",
        type:"select",
        options:[
            {label:"Avanzato C1-C2", value:"avanzato"},
            {label:"Medio B1-B2", value:"medio"},
            {label:"Base A1-A2", value:"base"},
        ]
    },
    {
        Header:"Certificazione",
        accessor:"certificazione",
        type:"file"
    }
]

export const lingueCertificateInitialValues = {
    lingua:null,
    livelloScritto:null,
    livelloOrale:null,
    certificazione:null
}
