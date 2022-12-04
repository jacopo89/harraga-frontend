import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {Option} from "./SelectFormField";
import {getNestedValue} from "../utils/form-generator-utils";

export interface RadioFormElementInterface extends BasicFormElementInterface{
    type:"radio",
    options:Option[]
}

export default function RadioFormField(props:RadioFormElementInterface){
    const {type,values, disable, errors, touched,setFieldValue,accessor,Header, options} = props

    const onChangeRadio = (e:any) => {
        setFieldValue(e.target.value)
    }
    return <>
        <Form.Label>{Header}</Form.Label>
        <div>
            {options.map(option =><Form.Check disabled={disable} name={accessor} type="radio" value={option.value} label={option.label} id={option.value} inline onChange={onChangeRadio} checked={getNestedValue(accessor,values)=== option.value} />)}
        </div>

    </>
}
