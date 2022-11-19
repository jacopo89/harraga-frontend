import {FormElements} from "../../../../form-generator/ElementInterface";

export const fotoSegnalazioneElements: FormElements = [
    {
        accessor:"data",
        Header: "Data",
        type:"date"
    },
    {
        accessor:"ufficioCompetente",
        Header: "Ufficio Competente",
        type:"text"
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const fotoSegnalazioneInitialValues= {
    motivazione:null,
    allegato:null
}
