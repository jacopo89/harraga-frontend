import {FormElements} from "../../../../form-generator/ElementInterface";

export const  esperienzeLavorativeElements:FormElements = [
    {
        Header:"Stato",
        accessor:"stato",
        type:"select",
        options:[
            {label:"In corso", value:"in_corso"},
            {label:"Pregressa", value:"pregressa"},
        ]
    },
    {
        Header:"Tipologia",
        accessor:"tipologia",
        type:"select",
        options:[
            {label:"Formale", value:"formale"},
            {label:"Non formale", value:"non_formale"},
        ]
    },
    {
        Header:"Ambiti lavorativi",
        accessor:"ambitiLavorativi",
        type:"text"
    },
    {
        Header:"Data inizio",
        accessor:"dataInizio",
        type:"date"
    },
    {
        Header:"Data fine",
        accessor:"dataFine",
        type:"date"
    },
    {
        Header:"Nome azienda",
        accessor:"nomeAzienda",
        type:"text"
    },
    {
        Header:"Luogo azienda",
        accessor:"luogoAzienda",
        type:"text"
    },
    {
        Header:"Email azienda",
        accessor:"emailAzienda",
        type:"text"
    },
    {
        Header:"Telefono azienda",
        accessor:"telefonoAzienda",
        type:"text"
    },
    {
        Header:"Competenze acquisite",
        accessor:"competenzeAcquisite",
        type:"wysiwyg"
    }
]

export const esperienzeLavorativeInitialValues = {
    stato:null,
    tipologia:null,
    ambitiLavorativi:null,
    dataInizio:null,
    dataFine:null,
    nomeAzienda:null,
    luogoAzienda:null,
    emailAzienda:null,
    telefonoAzienda:null,
    competenzeAcquisite:null,

}
