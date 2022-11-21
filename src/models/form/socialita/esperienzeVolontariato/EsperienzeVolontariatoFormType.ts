import {FormElements} from "../../../../form-generator/ElementInterface";

export const esperienzeVolontariatoElements:FormElements = [
    {
        Header: 'Stato',
        accessor: 'stato',
        type: "select",
        options:[
            {label:"In corso",value:"in_corso"},
            {label:"Pregressa",value:"pregressa"}
        ]
    },
    {
        Header: 'Tipo',
        accessor: 'tipo',
        type: "text",
    },
    {
        Header: 'Data inizio',
        accessor: 'dataInizio',
        type: "date",
    },
    {
        Header: 'Data fine',
        accessor: 'dataFine',
        type: "date",
    },
    {
        Header: 'Competenze acquisite',
        accessor: 'competenzeAcquisite',
        type: "wysiwyg",
    },
    {
        Header: 'Certificazione',
        accessor: 'certificazione',
        type: "file",
    },
    {
        Header: 'Nome referente',
        accessor: 'nomeReferente',
        type: "text",
    },
    {
        Header: 'Cognome referente',
        accessor: 'cognomeReferente',
        type: "text",
    },
    {
        Header: 'Email referente',
        accessor: 'emailReferente',
        type: "text",
    },
    {
        Header: 'Telefono referente',
        accessor: 'telefonoReferente',
        type: "text",
    },

]


export const esperienzeInitialValues = {
    stato:null,
    tipo:null,
    dataInizio:null,
    dataFine:null,
    competenzeAcquisite:null,
    certificazione:null,
    nomeReferente:null,
    cognomeReferente:null,
    emailReferente:null,
    telefonoReferente:null,
};
