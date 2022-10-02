import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";

export const domicilioInitialValues = {
    tipologiaDomicilio:null
}

const domicilioElements:FormElements = [
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
    }
]

const elements:FormElements = [
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
        accessor:"domicilio",
        Header:"Domicilio/Accoglienza",
        type:"collection",
        formElements:domicilioElements
    }
]


const initialValues = {
    nome:null,
    cognome:null,
    domicilio:[],
};

const validationForm = Yup.object().shape({
    nome:Yup.string().required("Inserire il nome").nullable(),
    cognome: Yup.string().required('Inserire il cognome').nullable(),
});

export const validationSchema = Yup.object().shape({
    anagrafica:validationForm,
    testo:Yup.string().required("Inserire il TESTO").nullable(),
})


export const anagraficaElements:FormElements = [
    {
        Header:"Anagrafica",
        accessor:"anagrafica",
        type:"embedded",
        formElements:elements,
    },
]

export const anagraficaInitialValues ={
    anagrafica:initialValues
}
