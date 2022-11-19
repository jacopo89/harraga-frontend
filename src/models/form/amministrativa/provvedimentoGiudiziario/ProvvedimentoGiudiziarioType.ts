import {FormElements} from "../../../../form-generator/ElementInterface";

export const provvedimentoGiudiziarioElements: FormElements = [
    {
        Header: 'Data',
        accessor: 'data',
        type: "date",
    },
    {
        Header: 'Tipo',
        accessor: 'tipo',
        type: "text",
    },
    {
        Header: 'Istituzione emittente',
        accessor: 'istituzioneEmittente',
        type: "text",
    },
    {
        Header: "Nome dell'avvocato",
        accessor: 'nomeAvvocato',
        type: "text",
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const provvedimentoGiudiziarioInitialValues= {
    data:null,
    tipo:null,
    istituzioneEmittente:null,
    nomeAvvocato:null,
    allegato:null
}
