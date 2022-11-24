import {FormElements} from "../../../../form-generator/ElementInterface";

export const percorsoIstruzioneOrigineFormElements:FormElements = [
    {
        Header: 'Sa leggere',
        accessor: 'saLeggere',
        type: "select",
        options:[
            {label:"Sì", value:"si"},
            {label:"No", value:"no"},
            {label:"Parzialmente", value:"parzialmente"},
        ]
    },
    {
        Header: 'Sa scrivere',
        accessor: 'saScrivere',
        type: "select",
        options:[
            {label:"Sì", value:"si"},
            {label:"No", value:"no"},
            {label:"Parzialmente", value:"parzialmente"},
        ]
    },
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
        Header: "Allegato",
        accessor: "allegato",
        type:"file"
    }
]


export const percorsoIstruzioneOrigineInitialValues = {
    saLeggere:null
};

