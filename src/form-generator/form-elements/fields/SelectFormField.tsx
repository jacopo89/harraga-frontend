import React, {useCallback, useEffect, useState} from "react";
// @ts-ignore
import Select from "react-select";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {Form} from "react-bootstrap";
import {getNestedValue} from "../utils/form-generator-utils";

export interface Option{
    label:string,
    value:string,
}


export interface SelectFormElementInterface extends BasicFormElementInterface{
    type:"select",
    options:Option[],

}

export default function SelectFormField(element:SelectFormElementInterface){
    const {type,values, errors,options, touched,setFieldValue,accessor,Header} = element

    const [value, setValue] = useState<Option|undefined>(options.find(option => option.value === getNestedValue(accessor,values) ));

    const updateSelectValue =  useCallback(()=>{
        if(options.find(option => option.value === getNestedValue(accessor,values) )!== value){
            console.log("changed values in select", getNestedValue(accessor,values), "while it was", value)
            setValue(options.find(option => option.value === getNestedValue(accessor,values) ))
        }
    },[accessor, values, value])

    useEffect(()=>{
        updateSelectValue()
    },[values])

    /*useEffect(()=>{
        if(value) setFieldValue(value.value)
    },[value])*/





    // @ts-ignore
    const select =<Select classNamePrefix="react-select" options={options} value={value} onChange={(value) =>setFieldValue(value.value)} placeholder={Header} />


    return <>
        <Form.Label>{Header}</Form.Label>
        {select}
    </>
}
