import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {Option} from "./SelectFormField";

export interface RadioFormElementInterface extends BasicFormElementInterface{
    type:"radio",
    options:Option[]
}

export default function RadioFormField(props:RadioFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header, options} = props

    const onChangeRadio = (e:any) => {
        setFieldValue(e.target.value)
    }
    return <>
        {options.map(option =><Form.Check name={accessor} type="radio" value={option.value} label={option.label} id={option.value} inline onChange={onChangeRadio} checked={values[accessor]=== option.value} />)}
    </>
}
