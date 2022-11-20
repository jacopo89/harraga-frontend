import {FormElements} from "../../../../form-generator/ElementInterface";

export const valutazioneMultidisciplinareFormElements :FormElements = [
    {
        Header:"Tipologia",
        accessor:"tipologia",
        type:"select",
        options:[
            {label:"Tratta",value:"tratta"},
            {label:"Protezione Internazionale",value:"protezione"},
        ]
    },
    {
        Header:"Valutazione",
        accessor:"valutazione",
        type:"wysiwyg",
    }
]
