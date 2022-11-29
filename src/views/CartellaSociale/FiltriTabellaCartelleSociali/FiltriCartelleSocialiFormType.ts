import * as Yup from "yup";
import {FilterElements} from "../../../form-generator/filter-elements/FilterElementInterface";
import {BACKEND_FORMAT, getMomentDate} from "../../../form-generator/form-elements/utils/TimeManager";

export const filtriElements:FilterElements = [
    {
        Header:"Nome",
        accessor:"nome",
        type:"text",
        accessorManipulator: (formValue) => "anagrafica.nome"
    },
    {
        Header:"Cognome",
        accessor:"cognome",
        type:"text",
        accessorManipulator: (formValue) => "anagrafica.cognome"
    },
    {
        Header:"Paese origine",
        accessor:"paeseOrigine",
        type:"countries",
        accessorManipulator: (formValue) => "anagrafica.paeseOrigine"
    },
    {
        Header:"Italiano",
        accessor:"italiano",
        type:"radio",
        options:[
            {label:"", value:""},
            {label:"Sì", value:"true"},
            {label:"NO", value:"false"},
        ],
        accessorManipulator: (formValue) => "anagrafica.italiano"
    },
    {
        Header:"Maggiorenne",
        accessor:"maggiorenne",
        type:"radio",
        options:[
            {label:"", value:""},
            {label:"Sì", value:"true"},
            {label:"NO", value:"false"},
        ],
        accessorManipulator: (formValue) => formValue.maggiorenne==="true" ? "anagrafica.dataNascitaCorretta[before]" : "anagrafica.dataNascitaCorretta[after]",
        valueManipulator: (formValue) => (formValue.maggiorenne === "") ? undefined : getMomentDate(new Date()).subtract(18,"years").format(BACKEND_FORMAT)
    },
]

export const filtriInitialValues = {
    maggiorenne:"",
    italiano:""
}

export const filtriValidationSchema = Yup.object().shape({

});
