import {FormikErrors, FormikTouched, FormikValues} from "formik";
import {GenericElementInterface} from "../ElementInterface";
import React from "react";

export interface FormContextInterface{
    values:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(name:string,value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>,
    elements:GenericElementInterface[],
    submitForm:(e?: React.FormEvent<HTMLFormElement> | undefined) => Promise<any>

}

const formContextDefaultValue:FormContextInterface = {
    values:{},
    errors:{},
    touched:{},
    setFieldValue:(name:string,value:any)=>new Promise<void>(()=>{}),
    elements:[],
    submitForm: (e?: React.FormEvent<HTMLFormElement> | undefined) => new Promise<void>(()=>{})
}


const FormGeneratorContext = React.createContext(formContextDefaultValue)

export default FormGeneratorContext
