import {FormElements} from "../../../../form-generator/ElementInterface";

export const documentiIdentitaElements:FormElements = [
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file",
    },
    {
        Header: 'Descrizione',
        accessor: 'descrizione',
        type: "text",
    },
    {
        accessor:"tipologia",
        Header: "Tipologia",
        type:"select",
        options:[
            {label:"Estratto di nascita", value:"estratto"},
            {label:"Carta d'identità", value:"cartaIdentita"},
            {label:"Codice fiscale", value:"codiceFiscale"},
            {label:"Altro", value:"altro"},
        ]
    },
    {
        Header: 'Note',
        accessor: 'note',
        type: "wysiwyg",
    },
]

export const documentiIdentitaInitialValues = {
    allegato:null,
    tipologia:null,
    note:null,
    descrizione:null
}
