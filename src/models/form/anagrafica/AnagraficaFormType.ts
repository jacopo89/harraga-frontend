import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";

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
    }
]


const initialValues = {
    nome:null,
    cognome:null,
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
        initialValues:initialValues
    },
    {
        Header:"Testo",
        accessor:"testo",
        type:"text",
    }
]

export const anagraficaInitialValues ={
    anagrafica:initialValues
}
