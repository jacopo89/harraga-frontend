import {FormElements} from "../../../../form-generator/ElementInterface";

export const hotspotFormElements :FormElements = [
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

export const hotspotInitialValues = {
    nome:null,
    dataIngresso:null,
    dataUscita:null
}
