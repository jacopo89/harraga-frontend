import React from "react";
import { Form } from "react-bootstrap";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface CheckboxFormElementInterface extends BasicFormElementInterface{
    type:"checkbox"
}

export default function CheckboxFormField(props:CheckboxFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    const onChange = ()=> setFieldValue(!getNestedValue(accessor,values))
    return <>
        <Form.Check name={accessor} type="checkbox" label={Header} id={accessor} onChange={onChange} checked={getNestedValue(accessor,values)} />
    </>
}
