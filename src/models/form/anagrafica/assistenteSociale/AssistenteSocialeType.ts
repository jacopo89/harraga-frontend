import {FormElements} from "../../../../form-generator/ElementInterface";

export const assistenteSocialeElements: FormElements = [
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

export const assistenteSocialeInitialValues = {
    nome:null,
    cognome:null,
    email:null,
    telefono:null
}
