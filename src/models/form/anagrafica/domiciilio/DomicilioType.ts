import {FormElements} from "../../../../form-generator/ElementInterface";

export const domicilioInitialValues = {
    tipologiaDomicilio:null
}
export const domicilioElements:FormElements = [
    {
        accessor:"tipologiaDomicilio",
        Header: "Tipologia",
        type:"select",
        options:[
            {label:"Famiglia Affidataria", value:"famigliaAffidataria"},
            {label:"CPA", value:"cpa"},
            {label:"Comunità", value:"comunita"},
            {label:"Sprar", value:"sprar"},
        ]
    },
    {
        Header:"Nome",
        accessor:"nome",
        type:"text"
    },
    {
        Header:"Tipo di Inserimento",
        accessor:"tipoInserimento",
        type:"text"
    },
    {
        Header:"Responsabile",
        accessor:"responsabile",
        type:"text"
    },
    {
        Header:"Email",
        accessor:"email",
        type:"text"
    },
    {
        Header:"Telefono",
        accessor:"telefono",
        type:"date"
    }
]
