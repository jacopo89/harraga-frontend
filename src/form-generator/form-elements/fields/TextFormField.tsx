import {Form} from "react-bootstrap";
import React, {useEffect} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {getNestedValue} from "../utils/form-generator-utils";

export interface TextElementInterface extends BasicFormElementInterface{
    type:"text"
}

export default function TextFormField(props:TextElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    useEffect(()=>{
        console.log("accessor disable", accessor, disable)
    },[])
    useEffect(()=>{
       /* console.log("values", values)
        console.log("accessor", accessor)
        console.log("nested", getNestedValue(accessor, values))*/
    },[values, accessor])
    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control disabled={disable} type="text" name={accessor} placeholder={Header} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(e.target.value)} />
        {nestedTouched && <div className="d-block">{errorMessage}</div>}
    </div>
}
