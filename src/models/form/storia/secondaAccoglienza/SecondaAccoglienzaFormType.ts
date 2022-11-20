import {FormElements} from "../../../../form-generator/ElementInterface";

export const SecondaAccoglienzaFormElements :FormElements = [
    {
        Header: 'Seconda accoglienza',
        accessor: 'secondaAccoglienza',
        type: "text",
    },
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "select",
        options:[
            {label:"Sprar",value:"sprar"},
            {label:"Comunità di alloggio",value:"comunita"},
            {label:"Altro",value:"altro"},
        ]
    },
    {
        Header: 'Nome responsabile',
        accessor: 'nomeResponsabile',
        type: "text",
    },
    {
        Header: 'Cognome responsabile',
        accessor: 'cognomeResponsabile',
        type: "text",
    },
    {
        Header: 'Email responsabile',
        accessor: 'emailResponsabile',
        type: "text",
    },
    {
        Header: 'Telefono responsabile',
        accessor: 'telefonoResponsabile',
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

export const SecondaAccoglienzaInitialValue ={
    tipologia:null,
    secondaAccoglienza:null,
    nomeResponsabile:null,
    cognomeResponsabile:null,
    emailResponsabile:null,
    telefonoResponsabile:null,
    dataIngresso:null,
    dataUscita:null,
}
