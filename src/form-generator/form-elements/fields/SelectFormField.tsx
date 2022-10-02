import React, {useEffect, useState} from "react";
// @ts-ignore
import Select from "react-select";
import BasicFormElementInterface from "../../BasicFormElementInterface";

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

    const [value, setValue] = useState<Option|undefined>(options.find(option => option.value === values[accessor] ));

    useEffect(()=>{
        if(value) setFieldValue(value.value)
    },[value])

    useEffect(()=>{
        if(options.find(option => option.value === values[accessor] )!== value){
            setValue(options.find(option => option.value === values[accessor] ))
        }
    },[values[accessor]])

    // @ts-ignore
    return <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder={Header} />
}
