import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {assistenteSocialeElements, assistenteSocialeInitialValues} from "./assistenteSociale/AssistenteSocialeType";
import {mediatoreElements, mediatoreInitialValues} from "./mediatore/MediatoreType";
import {domicilioElements, domicilioInitialValues} from "./domiciilio/DomicilioType";
import {documentiIdentitaElements, documentiIdentitaInitialValues} from "./documentoIdentita/DocumentoIdentitaType";
import {tutoreElements, tutoreInitialValues} from "./tutore/TutoreType";
import {
    polizzaAssicurativaElements,
    polizzaAssicurativaInitialValues
} from "./polizzaAssicurativa/PolizzaAssicurativaType";
import {documentiPossessoElements, documentiPossessoInitialValues} from "./documentiPossesso/DocumentiPossessoType";

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
        Header: 'Email',
        accessor: 'email',
        type: "text",
    },
    {
        Header: 'Telefono',
        accessor: 'telefono',
        type: "text",
    },
    {
        Header: 'Unità operativa (UO)',
        accessor: 'unitaOperativa',
        type: "text",
    },
    {
        Header: 'Data assegnazione (UO)',
        accessor: 'dataAssegnazioneUO',
        type: "date",
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
        type: "countries",
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
        accessor:"domicilios",
        Header:"Domicilio/Accoglienza",
        type:"collection",
        formElements:domicilioElements,
        initialValues:domicilioInitialValues
    },
    {
        accessor:"documentoIdentitas",
        Header:"Documenti Identità",
        type:"collection",
        formElements:documentiIdentitaElements,
        initialValues:documentiIdentitaInitialValues
    },
    {
        accessor:"mediatore",
        Header:"Mediatore",
        type:"embedded",
        formElements:mediatoreElements,
        initialValues:mediatoreInitialValues
    },
    {
        accessor:"assistenteSociale",
        Header:"Assistente Sociale",
        type:"embedded",
        formElements:assistenteSocialeElements,
        initialValues:assistenteSocialeInitialValues
    },
    {
        accessor:"tutore",
        Header:"Tutore",
        type:"embedded",
        formElements:tutoreElements,
        initialValues: tutoreInitialValues
    },
    {
        accessor:"polizzaAssicurativa",
        Header:"Polizza assicurativa",
        type:"embedded",
        formElements:polizzaAssicurativaElements,
        initialValues: polizzaAssicurativaInitialValues
    },
    {
        accessor:"documentiPossesso",
        Header:"Documenti possesso",
        type:"embedded",
        formElements:documentiPossessoElements,
        initialValues:documentiPossessoInitialValues
    },
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
    domicilios:[],
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
        initialValues:{}
    },
]

export const cartellaSocialeInitialValues ={
    anagrafica:anagraficaInitialValues
}
