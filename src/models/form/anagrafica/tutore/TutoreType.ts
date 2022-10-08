import {FormElements} from "../../../../form-generator/ElementInterface";

export const tutoreInitialValues = {
}
export const tutoreElements:FormElements = [
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
    {
        Header: 'Numero tutela',
        accessor: 'numeroTutela',
        type: "text",
    },
    {
        Header: 'dataAssegnazione',
        accessor: 'dataAssegnazione',
        type: "date",
    },
    {
        Header: 'Luogo assegnazione',
        accessor: 'luogoAssegnazione',
        type: "text",
    },
    {
        Header: 'Motivazione tutela',
        accessor: 'motivazioneTutela',
        type: "text",
    },
    {
        Header: 'Tribunale dei minori',
        accessor: 'tribunaleMinori',
        type: "text",
    },
    {
        Header: 'Giudice tutelare',
        accessor: 'giudiceTutelare',
        type: "text",
    },
    {
        Header: 'Rettifica tutela',
        accessor: 'rettificaTutela',
        type: "text",
    },
    {
        Header: 'Decreto tribunale',
        accessor: 'decretoTribunale',
        type: "file",
    },

]
