import React from "react";
import { Form } from "react-bootstrap";
import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface CheckboxFormElementInterface extends BasicFormElementInterface{
    type:"checkbox"
}

export default function CheckboxFormField(props:CheckboxFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    const onChange = ()=> setFieldValue(!values[accessor])
    return <>
        <Form.Check name={accessor} type="checkbox" label={Header} id={accessor} onChange={onChange} checked={values[accessor]} />
    </>
}
