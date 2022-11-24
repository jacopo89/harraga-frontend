import {FormElements} from "../../../../form-generator/ElementInterface";
export const mediatoreElements: FormElements = [
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
    },
]

export const mediatoreInitialValues = {
    nome:null,
    cognome:null,
    email:null,
    telefono:null
}
