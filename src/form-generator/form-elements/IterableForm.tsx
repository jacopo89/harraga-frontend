import React, {useContext, useEffect} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import {getNestedValue} from "./utils/form-generator-utils";
import {Button} from "react-bootstrap";
import FormGeneratorContextProvider from "../form-context/FormGeneratorContextProvider";

interface IterableFormInterface{
    accessor:string,
    buttonLabel:string,
    initialValue:any,
    form:(index:number) => JSX.Element
}

export const IterableForm = ({accessor,buttonLabel,initialValue,form}:IterableFormInterface) => {


    const {setFieldValue,values,elements,accessorRoot} = useContext(FormGeneratorContext);

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);
    if(collectionElement === undefined) return <div>{accessor}</div>

    const existing = getNestedValue(accessor,values).length
    // @ts-ignore
    const nestedElements= collectionElement.formElements

    return <div>
        <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValue)}}>
            {buttonLabel}
        </Button>
        {getNestedValue(`${accessor}`,values).map((element:any,index:number)=>
            (<>

            </>
            )
        )}
    </div>
}
