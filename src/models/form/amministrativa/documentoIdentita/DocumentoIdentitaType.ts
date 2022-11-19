import {FormElements} from "../../../../form-generator/ElementInterface";

export const documentoIdentitaAmministrativaElements: FormElements = [
    {
        accessor:"allegato",
        Header: "Allegato",
        type:"file"
    }
]


export const documentoIdentitaAmministrativaInitialValues= {
    motivazione:null,
    allegato:null
}
