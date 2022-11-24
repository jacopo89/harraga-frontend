import {Button} from "react-bootstrap";
import React, {useContext, useEffect, useMemo} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import {IterableForm} from "../IterableForm";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";
import {getNestedValue} from "../utils/form-generator-utils";

export interface CollectionElementInterface extends BasicFormElementInterface{
    type:"collection",
    formElements: FormElements,
    buttonLabel:string,
    nestedForm: (index:number)=>JSX.Element
    initialValues:object
}

export default function CollectionFormField({accessor, nestedForm, buttonLabel ="Aggiungi",initialValues}:CollectionElementInterface){

    const {setFieldValue,values,elements,accessorRoot} = useContext(FormGeneratorContext);
    const existingElements = useMemo(()=>{
        return getNestedValue(accessor,values)
    },[accessor, values])

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);


    const existing = getNestedValue(accessor,values).length

    // @ts-ignore
    const nestedElements= collectionElement.formElements
    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
                const indexAccessor = `${accessor}[${index}]`
                return (<>
                        <FormGeneratorContextProvider key={index} elements={nestedElements} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                            {nestedForm(index)}
                        </FormGeneratorContextProvider>
                    </>
                )})
    },[existingElements, accessor, initialValues])


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>
            {buttonLabel}
        </Button>
    </div>
}
