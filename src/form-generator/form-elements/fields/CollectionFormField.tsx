import {Button} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";

export interface CollectionElementInterface extends BasicFormElementInterface{
    type:"collection",
    formElements: FormElements,
    nestedForm: JSX.Element,
    initialValues: any,
    validationSchema:any
}

export default function CollectionFormField(props:CollectionElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header,formElements, initialValues,nestedForm} = props

    const nestedValues = values[accessor] ;
    const nestedErrors = errors[accessor] ?? nestedValues.map((el:any) => {return {}} );
    const nestedTouched = touched[accessor] ?? nestedValues.map((el:any) => {return {}} );

    const changeValue = (index:number) => (value:any)=> {
        const newNestedValues = [...nestedValues]
        newNestedValues[index] = value;
        return setFieldValue(newNestedValues)
    }

    const addValue = () => {
        const newNestedValues = [...nestedValues]
        newNestedValues.push(initialValues);
        return setFieldValue(newNestedValues)
    }

    // @ts-ignore
    const list = nestedValues.map((nestedValue:any,index:number) => <FormGeneratorContext.Provider key={index} value={{setFieldValue:changeValue(index), values:nestedValue,errors:nestedErrors[index], touched:nestedTouched[index],elements:formElements, submitForm:()=>new Promise<void>(()=>{}) }}>
        {nestedForm}
    </FormGeneratorContext.Provider>)

    return <div>
        <Button onClick={addValue} >PlUS</Button>
        {list}
    </div>
}
