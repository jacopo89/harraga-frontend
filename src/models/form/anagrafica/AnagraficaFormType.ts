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
    },

]


const initialValues = {
    nome:null,
    cognome:null,
};

const validationForm = Yup.object().shape({
    nome:Yup.string().required("Inserire il nome").nullable(),
    cognome: Yup.string().required('Inserire il cognome').nullable(),
});


export const anagraficaElements:FormElements = [
    {
        Header:"Anagrafica",
        accessor:"anagrafica",
        type:"embedded",
        validationSchema:validationForm,
        formElements:elements,
        initialValues:initialValues
    }
]

export const anagraficaInitialValues ={
    anagrafica:initialValues
}
