import {FormElements} from "../../../../form-generator/ElementInterface";

export const parenteFormElements :FormElements = [
    {
        Header: 'Relazione Parentela',
        accessor: 'relazioneParentela',
        type: "select",
        options:[
            {label:"Padre", value:"padre"},
            {label:"Madre", value:"madre"},
            {label:"Fratello", value:"fratello"},
            {label:"Sorella", value:"sorella"},
            {label:"Altro", value:"altro"},
        ]
    },
    {
        Header: 'Nome',
        accessor: 'nome',
        type: "text",
    },
    {
        Header: 'Cognome',
        accessor: 'cognome',
        type: "text",
    },
    {
        Header: 'Email',
        accessor: 'email',
        type: "text",
    },
    {
        Header: 'Paese origine',
        accessor: 'paeseOrigine',
        type: "text",
    },
    {
        Header: 'In vita',
        accessor: 'inVita',
        type: "checkbox",
    },
    {
        Header: 'In UE',
        accessor: 'inUE',
        type: "checkbox",
    },
    {
        Header: 'Note',
        accessor: 'note',
        type: "wysiwyg",
    },
    {
        Header: 'Allegato',
        accessor: 'allegato',
        type: "file",
    },
]

export const parentesInitialValue = {
    relazioneParentela:null,
    nome:null,
    cognome:null,
    email:null,
    paeseOrigine:null,
    inVita:null,
    inUE:null,
    note:null,
    allegato:null
}
