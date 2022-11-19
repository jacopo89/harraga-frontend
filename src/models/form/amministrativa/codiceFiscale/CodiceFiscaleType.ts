import {FormElements} from "../../../../form-generator/ElementInterface";

export const codiceFiscaleElements: FormElements = [
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const codiceFiscaleInitialValues= {
    motivazione:null,
    allegato:null
}
