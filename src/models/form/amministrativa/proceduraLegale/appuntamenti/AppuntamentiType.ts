import {FormElements} from "../../../../../form-generator/ElementInterface";

export const appuntamentiElements: FormElements = [
    {
        Header: "Luogo",
        accessor: "luogo",
        type:"select",
        options:[
            {label:"Questura", value:"questura"},
            {label:"Commissione", value:"commissione"},
            {label:"Anagrafe", value:"anagrafe"},
            {label:"Tribunale", value:"tribunale"},
            {label:"Comune", value:"comune"},
            {label:"Altro", value:"altro"},
        ]
    },
    {
        Header: "Motivo",
        accessor: "motivo",
        type:"text",
    },
    {
        Header: "Data",
        accessor: "data",
        type:"date",
    },
    {
        Header: "Esiti",
        accessor: "esiti",
        type:"text",
    }
]

export const appuntamentiInitialValues = {
    luogo:null,
    motivo:null,
    data:null,
    esiti:null
}
