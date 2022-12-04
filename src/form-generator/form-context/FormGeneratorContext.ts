import {FormikErrors, FormikTouched, FormikValues} from "formik";
import {FormElements, GenericElementInterface} from "../ElementInterface";
import React from "react";

export interface FormContextInterface{
    values:FormikValues,
    formValue:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(name:string,value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>,
    unsetFieldValue: (accessor:string) => void
    elements:GenericElementInterface[],
    submitForm:(e?: React.FormEvent<HTMLFormElement> | undefined) => Promise<any>
    accessorRoot?:string,
    disable:boolean,
}

const formContextDefaultValue:FormContextInterface = {
    values:{},
    formValue:{},
    errors:{},
    touched:{},
    setFieldValue:(name:string,value:any)=>new Promise<void>(()=>{}),
    unsetFieldValue:(name:string)=>{},
    elements:[],
    submitForm: (e?: React.FormEvent<HTMLFormElement> | undefined) => new Promise<void>(()=>{}),
    disable:false
}


const FormGeneratorContext = React.createContext(formContextDefaultValue)

export default FormGeneratorContext
