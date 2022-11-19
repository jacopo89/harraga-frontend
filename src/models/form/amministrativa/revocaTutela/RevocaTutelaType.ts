import {FormElements} from "../../../../form-generator/ElementInterface";

export const revocaTutelaElements: FormElements = [
    {
        Header: 'Motivazione',
        accessor: 'motivazione',
        type: "select",
        options:[
            {label:"Comune",value:"comune"},
            {label:"Maggiore età",value:"maggiore_eta"},
            {label:"Calcolo maggiore età",value:"calcolo_maggiore_eta"},
            {label:"altro",value:"altro"},
        ]
    },
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const revocaTutelaInitialValues= {
    motivazione:null,
    allegato:null
}
