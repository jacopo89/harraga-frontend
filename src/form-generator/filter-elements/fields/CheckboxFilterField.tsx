import React from "react";
import {Form} from "react-bootstrap";
import BasicFilterElementInterface from "../BasicFilterElementInterface";
import {getNestedValue} from "../../form-elements/utils/form-generator-utils";

export interface CheckboxFilterElementInterface extends BasicFilterElementInterface{
    type:"checkbox"
}

export default function CheckboxFilterField(props:CheckboxFilterElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    const onChange = ()=> setFieldValue(!getNestedValue(accessor,values))
    return <>
        <Form.Check name={accessor} type="checkbox" label={Header} id={accessor} onChange={onChange} checked={getNestedValue(accessor,values)} />
    </>
}
