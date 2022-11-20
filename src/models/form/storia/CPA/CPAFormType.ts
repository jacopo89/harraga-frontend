import {FormElements} from "../../../../form-generator/ElementInterface";

export const CPAFormElements :FormElements = [
    {
        Header: 'Nome',
        accessor: 'nome',
        type: "text",
    },
    {
        Header: 'Data Ingresso',
        accessor: 'dataIngresso',
        type: "date",
    },
    {
        Header: 'Data Uscita',
        accessor: 'dataUscita',
        type: "date",
    },
]


export const CPAInitialValues = {
    nome:null,
    dataIngresso:null,
    dataUscita:null
}
