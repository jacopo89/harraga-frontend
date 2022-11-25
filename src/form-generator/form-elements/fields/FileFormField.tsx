import {Button, Form} from "react-bootstrap";
import React, {useEffect} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import Dropzone from "react-dropzone-uploader";
import DropzonePreview from "../utils/DropzonePreview";
import {readFile, readFiles} from "../utils/FileUploadedHelper";
import 'react-dropzone-uploader/dist/styles.css'
import {getNestedValue} from "../utils/form-generator-utils";

export interface FileFormElementInterface extends BasicFormElementInterface{
    type:"file"
}

export default function FileFormField(props:FileFormElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    const existingFile = getNestedValue(accessor,values)
    useEffect(()=>{

    },[values])

    // @ts-ignore
    return <>
        {existingFile && <Button onClick={() => {
            window.open(process.env.REACT_APP_ENTRYPOINT + existingFile.url)
        }}>Download file</Button>}
        <Dropzone
        onSubmit={(successFiles)=>{
            const files = successFiles.map(file => file.file)
            // @ts-ignore
        }}
        onChangeStatus={(file, status, allFiles)=>{

            // @ts-ignore
            readFile(file.file).then(result => setFieldValue(result))

        }}

        PreviewComponent={DropzonePreview}
        accept="image/*"
        maxFiles={1}
        //SubmitButtonComponent={button}
        inputContent="Carica file"
        />
    </>
}
