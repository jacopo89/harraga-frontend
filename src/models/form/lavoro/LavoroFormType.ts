import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {
    esperienzeLavorativeElements,
    esperienzeLavorativeInitialValues
} from "./esperienzeLavorative/EsperienzaLavorativaFormType";


export const lavoroFormElements:FormElements = [
    {
        Header: 'Esperienze lavorative',
        accessor: 'esperienzaLavorativas',
        type: "collection",
        formElements:esperienzeLavorativeElements,
        initialValues:esperienzeLavorativeInitialValues,
    },
]


export const lavoroInitialValues = {
    esperienzaLavorativas:[],
};

export const lavoroValidationSchema = Yup.object().shape({
});


