import {FormElements} from "../../../../form-generator/ElementInterface";

export const allontanamentoFormElements :FormElements = [
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "select",
        options:[
            {label:"Allontanamento",value:"allontanamento"},
            {label:"Ritrovamento",value:"ritrovamento"},
        ]
    },
    {
        Header: 'Data',
        accessor: 'data',
        type: "date",
    },
    {
        Header: 'Luogo',
        accessor: 'luogo',
        type: "text",
    },
    {
        Header: 'Comunicazione',
        accessor: 'comunicazione',
        type: "file",
    },
    {
        Header: 'Note',
        accessor: 'note',
        type: "wysiwyg",
    },
]

export const allontanamentiValues = {
    tipologia:null,
    data:null,
    luogo:null,
    comunicazione:null,
    note:null
}
