import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";
import {getNestedValue} from "../utils/form-generator-utils";
import DeleteIcon from '@mui/icons-material/Delete';
import {Divider} from "@mui/material";

export interface CollectionElementInterface extends BasicFormElementInterface{
    type:"collection",
    formElements: FormElements,
    buttonLabel:string,
    nestedForm: (index:number)=>JSX.Element
    initialValues:object
}

export default function CollectionFormField({accessor, nestedForm, buttonLabel ="Aggiungi",initialValues}:CollectionElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    /*const existingElements = useMemo(()=>{
        console.log("ricalcolo existing elements.")
        return getNestedValue(accessor,values)
    },[accessor, values])*/

    const existingElements = getNestedValue(accessor,values)

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);


    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length

    // @ts-ignore
    const nestedElements= collectionElement.formElements
    const nestedForms = useMemo(()=>{
        return existingElements.map((element:any,index:number)=>{
                const indexAccessor = `${accessor}[${index}]`
                return (<Row className={"mb-3"}>
                        <Col xs={1}>
                            { !disable ? <Button className={"btn-sm p-1 rounded-circle bg-danger"}
                                     onClick={() => unsetFieldValue(indexAccessor)}>
                                <DeleteIcon/>
                            </Button> : <div>{index+1}</div>}
                        </Col>
                        <Col xs={11}>
                            <FormGeneratorContextProvider disable={disable} formValue={formValue} key={index} elements={nestedElements} initialValues={initialValues} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                                {nestedForm(index)}
                            </FormGeneratorContextProvider>
                            <Divider light/>
                        </Col>

                    </Row>
                )})
    },[existingElements, accessor, initialValues])


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {
            !disable && <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>
                {buttonLabel}
            </Button>
        }

    </div>
}
