import {FormElements} from "../../../../form-generator/ElementInterface";

export const  lingueDichiarateElements:FormElements = [
    {
        Header:"Lingua",
        accessor:"lingua",
        type:"text"
    },
    {
        Header:"Livello scritto",
        accessor:"livelloScritto",
        type:"select",
        options:[
            {label:"Bene", value:"bene"},
            {label:"Parzialmente", value:"parzialmente"},
            {label:"Male", value:"male"},
        ]
    },
    {
        Header:"Livello Orale",
        accessor:"livelloOrale",
        type:"select",
        options:[
            {label:"Bene", value:"bene"},
            {label:"Parzialmente", value:"parzialmente"},
            {label:"Male", value:"male"},
        ]
    }
]

export const lingueDichiarateInitialValues = {
    lingua:null,
    livelloScritto:null,
    livelloOrale:null
}
