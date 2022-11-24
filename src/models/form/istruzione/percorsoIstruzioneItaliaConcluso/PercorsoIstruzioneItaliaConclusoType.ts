import {FormElements} from "../../../../form-generator/ElementInterface";


export const percorsoIstruzioneItaliaConclusoFormElements:FormElements = [
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "select",
        options:[
            {label:"Formale", value:"formale"},
            {label:"Informale", value:"informale"},
        ]
    },
    {
        Header: "Data inizio",
        accessor: "dataInizio",
        type:"date"
    },
    {
        Header: "Data fine",
        accessor: "dataFine",
        type:"date"
    },
    {
        Header: "Allegato",
        accessor: "allegato",
        type:"file"
    },
    {
        Header: "Istituto",
        accessor: "istituto",
        type:"text"
    },
]


export const percorsoIstruzioneItaliaConclusoInitialValues = {
    tipologia:null,
    dataInizio:null,
    dataFine:null,
    allegato:null,
    istituto:null,
};
