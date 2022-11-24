import {Button} from "react-bootstrap";
import React, {useContext} from "react";
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

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);
    if(collectionElement === undefined) return <div>{accessor}</div>

    const existing = getNestedValue(accessor,values).length
    // @ts-ignore
    const nestedElements= collectionElement.formElements

    return <div>
        {getNestedValue(`${accessor}`,values).map((element:any,index:number)=>
            (<>
                    <FormGeneratorContextProvider elements={nestedElements} initialValues={initialValues} accessorRoot={`${accessor}[${index}]`} onChange={(value) => setFieldValue(`${accessor}[${index}]`, value)}>
                        {nestedForm(index)}
                    </FormGeneratorContextProvider>
                </>
            )
        )}
        <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>
            {buttonLabel}
        </Button>
    </div>
}
