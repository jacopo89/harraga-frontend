import {FormElements} from "../../../../../form-generator/ElementInterface";

export const ricorsiAmministrativiElements: FormElements = [
    {
        Header: "Data Inoltro ricorso",
        accessor: "dataInoltroRicorso",
        type:"date",
    },
    {
        Header:"Note",
        type:"wysiwyg",
        accessor:"note"
    },
    {
        Header: "Nome Avvocato",
        accessor: "nomeAvvocato",
        type:"text",
    },
    {
        Header: "Patrocinio gratuito",
        accessor: "patrocinioGratuito",
        type:"checkbox",
    },
    {
        Header: "Esiti",
        accessor: "esiti",
        type:"text",
    }
]
