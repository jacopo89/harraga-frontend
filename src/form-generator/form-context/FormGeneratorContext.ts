import {FormikErrors, FormikTouched, FormikValues} from "formik";
import {GenericElementInterface} from "../ElementInterface";
import React from "react";

export interface FormContextInterface{
    values:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(name:string,value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>,
    unsetFieldValue: (accessor:string) => void
    elements:GenericElementInterface[],
    submitForm:(e?: React.FormEvent<HTMLFormElement> | undefined) => Promise<any>
    accessorRoot?:string
}

const formContextDefaultValue:FormContextInterface = {
    values:{},
    errors:{},
    touched:{},
    setFieldValue:(name:string,value:any)=>new Promise<void>(()=>{}),
    unsetFieldValue:(name:string)=>{},
    elements:[],
    submitForm: (e?: React.FormEvent<HTMLFormElement> | undefined) => new Promise<void>(()=>{})
}


const FormGeneratorContext = React.createContext(formContextDefaultValue)

export default FormGeneratorContext
