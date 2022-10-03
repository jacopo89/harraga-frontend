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

const documentiIdentitaElements:FormElements = [
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file",
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
        Header: 'Numero Tutela',
        accessor: 'numeroTutela',
        type: "text",
    },
    {
        Header: 'Altro nome',
        accessor: 'altroNome',
        type: "text",
    },
    {
        Header: 'Italiano',
        accessor: 'italiano',
        type: "checkbox",
    },
    {
        Header: 'Sesso',
        accessor: 'sesso',
        type: "radio",
        options:[{label:"M", value:"m"},{label:"F",value:"f"},{label:"altro", value:"altro"}]
    },
    {
        Header: 'Luogo nascita',
        accessor: 'luogoNascita',
        type: "text",
    },
    {
        Header: 'Paese di origine',
        accessor: 'paeseOrigine',
        type: "text",
    },
    {
        Header: 'Cittadinanza',
        accessor: 'cittadinanza',
        type: "text",
    },
    {
        Header: 'Data nascita - prima identificazione',
        accessor: 'dataNascitaPrimaIdentificazione',
        type: "text",
    },
    {
        Header: 'Data nascita corretta',
        accessor: 'dataNascitaCorretta',
        type: "text",
    },
    {
        Header: 'lingua Madre',
        accessor: 'linguaMadre',
        type: "text",
    },
    {
        Header: 'Gruppo Etnico appartenenza',
        accessor: 'gruppoEtnicoAppartenenza',
        type: "text",
    },
    {
        Header: 'Data Arrivo in Italia',
        accessor: 'dataArrivoInItalia',
        type: "date",
    },
    {
        accessor:"domicilio",
        Header:"Domicilio/Accoglienza",
        type:"collection",
        formElements:domicilioElements
    },
    {
        accessor:"documentoIdentitas",
        Header:"Documenti Identità",
        type:"collection",
        formElements:documentiIdentitaElements
    }
]


const initialValues = {
    nome:null,
    cognome:null,
    numeroTutela:null,
    italiano:false,
    domicilio:[],
    documentoIdentitas:[]
};

const validationForm = Yup.object().shape({
    nome:Yup.string().required("Inserire il nome").nullable(),
    cognome: Yup.string().required('Inserire il cognome').nullable(),
    numeroTutela: Yup.string().required('Inserire il numero di tutela').nullable(),
});

export const validationSchema = Yup.object().shape({
    anagrafica:validationForm
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
