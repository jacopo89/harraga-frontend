import {FormElements} from "../../../../form-generator/ElementInterface";
export const polizzaAssicurativaElements: FormElements = [
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "text",
    },
    {
        Header: 'Numero',
        accessor: 'numero',
        type: "text",
    },
    {
        Header: 'Data inizio',
        accessor: 'dataInizio',
        type: "date",
    },
    {
        Header: 'Data fine',
        accessor: 'dataFine',
        type: "date",
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]

export const polizzaAssicurativaInitialValues = {
    tipologia:null,
    numero:null,
    dataInizio:null,
    dataFine:null,
    allegato:null
}
