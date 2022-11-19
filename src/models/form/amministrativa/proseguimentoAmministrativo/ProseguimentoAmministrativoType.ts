import {FormElements} from "../../../../form-generator/ElementInterface";

export const proseguimentoAmministrativoElements: FormElements = [
    {
        accessor:"dataAttribuzione",
        Header: "Data attribuzione",
        type:"date"
    },
    {
        accessor:"dataFinale",
        Header: "Data finale",
        type:"date"
    },
    {
        accessor:"note",
        Header: "Note",
        type:"wysiwyg"
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    },
]


export const proseguimentoAmministrativoInitialValues= {
    allegato:null,
    note:null,
}
