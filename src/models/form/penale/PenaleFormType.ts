import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";

const procedurePenaliElements:FormElements = [
    {
        Header: 'Stato procedimento',
        accessor: 'statoProcedimento',
        type: "select",
        options:[
            {label:"In corso",value:"in_corso"},
            {label:"Concluso",value:"concluso"},
        ]
    },
    {
        Header: 'Nome assistente sociale',
        accessor: 'nomeAssistenteSociale',
        type: "text",
    },
    {
        Header: 'Cognome assistente sociale',
        accessor: 'cognomeAssistenteSociale',
        type: "text",
    },
    {
        Header: 'Email assistente sociale',
        accessor: 'emailAssistenteSociale',
        type: "text",
    },
    {
        Header: 'Telefono assistente sociale',
        accessor: 'telefonoAssistenteSociale',
        type: "text",
    },
    {
        Header: 'PEI descrizione',
        accessor: 'peiDescrizione',
        type: "text",
    },
    {
        Header: 'Allegato',
        accessor: 'peiAllegato',
        type: "file",
    },

]

const procedurePenaliInitialValues = {
    statoProcedimento:null,
    nomeAssistenteSociale:null,
    cognomeAssistenteSociale:null,
    emailAssistenteSociale:null,
    telefonoAssistenteSociale:null,
    peiDescrizione:null,
    peiAllegato:null

}


export const penaleFormElements:FormElements = [
    {
        Header: 'Procedure penali',
        accessor: 'proceduraPenales',
        type: "collection",
        formElements:procedurePenaliElements,
        initialValues:procedurePenaliInitialValues,
    },
]


export const penaleInitialValues = {
    proceduraPenales:[],
};

export const penaleValidationSchema = Yup.object().shape({
});


