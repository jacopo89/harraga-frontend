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
    },
    {
        Header: 'Descrizione',
        accessor: 'descrizione',
        type: "text",
    },
]

const mediatoreElements: FormElements = [
    {
        Header: 'Nome',
        accessor: 'nome',
        type: "text",
    },
]

export const anagraficaElements:FormElements = [
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
        type: "date",
    },
    {
        Header: 'Data nascita corretta',
        accessor: 'dataNascitaCorretta',
        type: "date",
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
        Header: 'Alias',
        accessor: 'alias',
        type: "text",
    },
    {
        Header: 'Luogo arrivo in Italia',
        accessor: 'luogoArrivoInItalia',
        type: "text",
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
    },
    {
        accessor:"mediatore",
        Header:"Mediatore",
        type:"embedded",
        formElements:mediatoreElements
    }
]


export const anagraficaInitialValues = {
    nome:null,
    cognome:null,
    numeroTutela:null,
    altroNome:null,
    italiano:false,
    sesso: null,
    luogoNascita:null,
    paeseOrigine:null,
    cittadinanza:null,
    dataNascitaPrimaIdentificazione:null,
    dataNascitaCorretta:null,
    linguaMadre:null,
    gruppoEtnicoAppartenenza:null,
    dataArrivoInItalia:null,
    luogoArrivoInItalia:null,
    domicilio:[],
    documentoIdentitas:[]
};

export const anagraficaValidationSchema = Yup.object().shape({
    nome:Yup.string().required("Inserire il nome").nullable(),
    cognome: Yup.string().required('Inserire il cognome').nullable(),
    numeroTutela: Yup.string().required('Inserire il numero di tutela').nullable(),
});

export const cartellaSocialeValidationSchema = Yup.object().shape({
    anagrafica:anagraficaValidationSchema
})


export const cartellaSocialeElements:FormElements = [
    {
        Header:"Anagrafica",
        accessor:"anagrafica",
        type:"embedded",
        formElements:anagraficaElements,
    },
]

export const cartellaSocialeInitialValues ={
    anagrafica:anagraficaInitialValues
}
