import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";

export const amministrativaElements:FormElements = [

]


export const amministrativaInitialValues = {

};

export const amministrativaValidationSchema = Yup.object().shape({

});

export const cartellaSocialeValidationSchema = Yup.object().shape({
    amministrativa:amministrativaValidationSchema
})
