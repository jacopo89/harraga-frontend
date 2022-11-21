import {FormElements} from "../../../../form-generator/ElementInterface";

export const  altreCompetenzeElements:FormElements = [
    {
        Header:"Tipo",
        accessor:"tipo",
        type:"select",
        options:[
            {label:"Formale", value:"formale"},
            {label:"Informale", value:"informale"},
            {label:"Non formale", value:"non_formale"},
        ]
    },
    {
        Header:"Descrizione",
        accessor:"descrizione",
        type:"wysiwyg",
    },
    {
        Header:"Livello",
        accessor:"livello",
        type:"select",
        options:[
            {label:"Bene", value:"bene"},
            {label:"Parzialmente", value:"parzialmente"},
            {label:"Male", value:"male"},
        ]
    },
    {
        Header:"Certificazione",
        accessor:"certificazione",
        type:"file"
    }
]

export const altreCompetenzeInitialValues = {
    tipo:null,
    livello:null,
    descrizione:null,
    certificazione:null
}
