import {FormElements} from "../../../../../form-generator/ElementInterface";

export const regolamentoDublinoElements: FormElements = [
    {
        Header: "Paese origine",
        accessor: "paeseOrigine",
        type:"text",
    },
    {
        Header: "Paese arrivo",
        accessor: "paeseArrivo",
        type:"text",
    },
    {
        Header: "Data",
        accessor: "data",
        type:"date",
    },
    {
        Header: "Stato procedura",
        accessor: "statoProcedura",
        type:"text",
    },
    {
        Header:"Allegato",
        type:"file",
        accessor:"allegato"
    }
]

export const regolamentoDublinoInitialValues = {
    paeseOrigine:null,
    paeseArrivo:null,
    data:null,
    statoProcedura:null,
    allegato:null
}
