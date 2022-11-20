import {FormElements} from "../../../../form-generator/ElementInterface";

export const peiFormElements :FormElements = [
    {
        Header: 'Descrizione',
        accessor: 'descrizione',
        type: "wysiwyg",
    },
    {
        Header: 'Comunicazione',
        accessor: 'comunicazione',
        type: "file",
    },
]

export const PEIValues = {
    descrizione:null,
    comunicazione:null
}
