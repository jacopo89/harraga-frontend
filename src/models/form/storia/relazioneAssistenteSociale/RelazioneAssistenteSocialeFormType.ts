import {FormElements} from "../../../../form-generator/ElementInterface";

export const relazioneAssistenteSocialeFormElements :FormElements = [
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


export const RelazioneAssistenteSocialeValues= {
    descrizione:null,
    comunicazione:null
}
