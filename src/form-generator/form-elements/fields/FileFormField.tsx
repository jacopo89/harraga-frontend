import {Button, Form} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../utils/DropzonePreview";
import { readFiles } from "../utils/FileUploadedHelper";

export interface FileFormElementInterface extends BasicFormElementInterface{
    type:"file"
}

export default function FileFormField(props:FileFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    // @ts-ignore
    return <Dropzone
        onSubmit={(successFiles)=>{
            const files = successFiles.map(file => file.file)

            // @ts-ignore
            readFiles(files).then(result => onSubmit(result))

        }}
        PreviewComponent={DropzonePreview}
        accept="image/*"
        maxFiles={1}
        //SubmitButtonComponent={button}
        inputContent="Carica file"
    />
    return <div className="filled form-group tooltip-end-top">
        <Form.Control type="text" name={accessor} placeholder={Header} value={values[accessor]} onChange={(e)=>setFieldValue(e.target.value)} />
        {/*{errors[accessor] && touched[accessor] && <div className="d-block invalid-tooltip">{errors[accessor]}</div>}*/}
    </div>
}
