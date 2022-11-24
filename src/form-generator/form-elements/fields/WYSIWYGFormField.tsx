import React, {useCallback, useEffect, useState} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export interface WYSIWYGElementInterface extends BasicFormElementInterface{
    type:"wysiwyg"
}
const modules = {
    history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true
    }
}

export default function WYSIWYGFormField(props:WYSIWYGElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    useEffect(()=>{
    },[values[accessor]])
    const [value, setValue] = useState<string|undefined>(values[accessor]);


    const updateValueForm = useCallback(()=>{
        if(value !== values[accessor]){
            setFieldValue(value)
        }
    },[value,values[accessor]])

    const updateFromForm = useCallback(()=>{
        if(value !== values[accessor]){
            setValue(values[accessor])
        }
    },[value,values[accessor]])

    useEffect(()=>{updateFromForm()},[values[accessor]])
    useEffect(()=>{updateValueForm()},[value])

    return <div className="my-3">
        <p>{Header}</p>
        <ReactQuill className="filled form-group" modules={modules} theme="snow" value={value} onChange={(content)=>{setValue(content)}}/>
    </div>
}
