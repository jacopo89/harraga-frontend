import {FormElements} from "../../form-generator/ElementInterface";

export const uploadCSVFormElements: FormElements = [
    {
        accessor:"csvFile",
        Header: "csv file",
        type:"file"
    }
]

export const uploadCSVInitialValues = {
    csvFile:null
}
