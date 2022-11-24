import {Button} from "react-bootstrap";
import React, {useContext} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import {getNestedValue} from "../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";

export interface EmbeddedElementInterface extends BasicFormElementInterface{
    type:"embedded",
    formElements: FormElements,
    nestedForm: JSX.Element,
    initialValues: any,
    validationSchema:any,
}

export default function EmbeddedFormField(props:EmbeddedElementInterface){
    const {type,errors, touched,accessor,Header,formElements, initialValues,nestedForm} = props

    const {setFieldValue,values,elements,accessorRoot} = useContext(FormGeneratorContext);

    const embeddedElement = formElements.find(element => element.accessor ===accessor);
    if(embeddedElement === undefined) return <div>{accessor}</div>

    const existing = getNestedValue(accessor,values).length
    // @ts-ignore
    const nestedElements= collectionElement.formElements

    return <div>
        <FormGeneratorContextProvider elements={nestedElements} initialValues={initialValues} accessorRoot={`${accessor}`} onChange={(value) => setFieldValue(`${accessor}`, value)}>
            {nestedForm}
        </FormGeneratorContextProvider>
    </div>

    const nestedValues = values[accessor] ;
    const nestedErrors = errors[accessor] ?? {};
    const nestedTouched = touched[accessor] ?? {};

    /*const changeValue =  (key:string,value:any)=> {
        const newValue = {...nestedValues}
        newValue[key] = value;
        setFieldValue(newValue)
    }

    // @ts-ignore
    return <FormGeneratorContext.Provider value={{setFieldValue:changeValue, values:nestedValues,errors:nestedErrors, touched:nestedTouched,elements:formElements, submitForm:()=>new Promise<void>(()=>{}) }}>
            {nestedForm}
        </FormGeneratorContext.Provider>
*/
}
