import {Button} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";

export interface EmbeddedElementInterface extends BasicFormElementInterface{
    type:"embedded",
    formElements: FormElements,
    nestedForm: JSX.Element,
    initialValues: any,
    validationSchema:any,
}

export default function EmbeddedFormField(props:EmbeddedElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header,formElements, initialValues,nestedForm} = props

    const nestedValues = values[accessor] ;
    const nestedErrors = errors[accessor] ?? {};
    const nestedTouched = touched[accessor] ?? {};

    const changeValue =  (key:string,value:any)=> {
        const newValue = {...nestedValues}
        newValue[key] = value;
        setFieldValue(newValue)
    }


    // @ts-ignore
    return <FormGeneratorContext.Provider value={{setFieldValue:changeValue, values:nestedValues,errors:nestedErrors, touched:nestedTouched,elements:formElements, submitForm:()=>new Promise<void>(()=>{}) }}>
            {nestedForm}
        </FormGeneratorContext.Provider>

}
