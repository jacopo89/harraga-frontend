import {FormElements} from "../../../../form-generator/ElementInterface";

export const visiteElements:FormElements = [
    {
        Header:"Tipologia",
        accessor:"tipo",
        type:"text",
    },
    {
        Header:"Presidio Ospedaliero",
        accessor:"presidioOspedaliero",
        type:"text",
    },
    {
        Header:"Unità operativa",
        accessor:"UO",
        type:"text",
    },
    {
        Header:"Data",
        accessor:"data",
        type:"date",
    },
    {
        Header:"Nome Medico",
        accessor:"nomeMedico",
        type:"text",
    },
    {
        Header:"Cognome Medico",
        accessor:"cognomeMedico",
        type:"text",
    },
    {
        Header:"Email Medico",
        accessor:"email Medico",
        type:"text",
    },
    {
        Header:"Telefono Medico",
        accessor:"telefonoMedico",
        type:"text",
    },
    {
        Header:"Allegato",
        accessor:"allegato",
        type:"file",
    }
]

export const visitaInitialValues = {
    tipo:null,
    presidioOspedaliero:null,
    data:null,
    UO:null,
    nomeMedico:null,
    cognomeMedico:null,
    emailMedico:null,
    telefonoMedico:null,
    allegato:null,
}
