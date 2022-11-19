import {FormElements} from "../../../../form-generator/ElementInterface";

export const assistenteSocialeElements: FormElements = [
    {
        Header: 'Stato',
        accessor: 'stato',
        type: "select",
        options:[
            {label:"In attesa",value:"in_attesa"},
            {label:"Scaduto",value:"scaduto"},
            {label:"altro",value:"altro"},
        ]
    },
    {
        Header: 'Data Richiesta',
        accessor: 'dataRichiesta',
        type: "date",
    },
    {
        Header: 'Data Rilascio',
        accessor: 'dataRilascio',
        type: "date",
    },
    {
        Header: 'Rilasciato da',
        accessor: 'rilasciatoDa',
        type: "text",
    },
    {
        Header: 'Data Scadenza',
        accessor: 'dataScadenza',
        type: "date",
    },
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "select",
        options:[
            {label:"Minore età",value:"minore_eta"},
            {label:"Richiesta asilo",value:"richiesta_asilo"},
            {label:"Umanitario",value:"umanitario"},
            {label:"Sussidiaria",value:"sussidiaria"},
            {label:"Status rifugiato",value:"status_rifugiato"},
            {label:"Lavoro",value:"lavoro"},
            {label:"Studio",value:"studio"},
            {label:"Altro",value:"altro"},
        ]
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const permessoSoggiornoInitialForm= {
    stato:null,
    dataRichiesta:null,
    dataRilascio:null,
    dataScadenza:null,
    rilasciatoDa:null,
    tipologia:null,
    allegato:null
}
