import {Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface TextElementInterface extends BasicFormElementInterface{
    type:"text"
}

export default function TextFormField(props:TextElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    return <div className="filled form-group tooltip-end-top">
        <Form.Control type="text" name={accessor} placeholder={Header} value={values[accessor]} onChange={(e)=>setFieldValue(e.target.value)} />
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>
}
