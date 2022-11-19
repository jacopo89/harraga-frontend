import {FormElements} from "../../../../form-generator/ElementInterface";

export const riferimentoLegaleElements: FormElements = [
    {
        Header: 'Tipo',
        accessor: 'tipo',
        type: "text",
    },
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
        Header: 'Email',
        accessor: 'email',
        type: "text",
    },
    {
        Header: 'Telefono',
        accessor: 'telefono',
        type: "text",
    }
]


export const riferimentoLegaleInitialValues= {
    tipo:null,
    nome:null,
    cognome:null,
    email:null,
    telefono:null
}
