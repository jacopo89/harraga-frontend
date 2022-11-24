import {FormikErrors, FormikTouched, FormikValues, useFormik} from "formik";
import {useCallback, useEffect} from "react";
import FormGeneratorContext from "./FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {GenericResponse} from "../../helpers/response/GenericResponse";

type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>
} | {
    accessorRoot?: never;
    onSubmit?: (values:any) => void | Promise<any>;
    onChange?: never;
};

type CommonProps = {
    elements: GenericElementInterface[]
    validationSchema?:any,
    initialValues:FormikValues
    children?:any,
    existingValue?:FormikValues,
    existingErrors?: FormikErrors<FormikValues>|undefined
    existingTouched?: FormikTouched<FormikValues>|undefined
}

type Props = CommonProps & ConditionalProps

export default function FormGeneratorContextProvider({elements, validationSchema, initialValues,onSubmit, children, existingValue,existingErrors, accessorRoot, onChange}:Props){
    const onSubmitHandler = (values:FormikValues) => {
        if(onSubmit){
            const onSubmitResponse = onSubmit(values)
            if(onSubmitResponse instanceof Promise){
                return onSubmitResponse.catch((error)=>{
                    if (error.response.status===400) {
                        const response = GenericResponse.fromResponse(error.response)
                        setErrors(response.content);
                    }
                    throw error
                })
            }
            return onSubmitResponse;
        }

        return new Promise<any>(()=>{});
    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit:onSubmitHandler });
    const { handleSubmit, setValues, values, touched, errors, setFieldValue,setErrors, setTouched,submitForm } = formik;

    const updateValues = useCallback(()=>{
        if(existingValue && existingValue !== values) {
            setValues(existingValue)
        }
    },[existingValue,values])

    useEffect(()=>{
        if(accessorRoot){
            console.log("accessor root",values)
            onChange(values)
        }
        else{
            console.log("values",values)
        }
    },[values])

    /*const updateErrors = useCallback(()=>{
        if(existingErrors && existingErrors !== errors) {
            setErrors(existingErrors)
        }
    },[existingErrors,errors])

    const updateTouched = useCallback(()=>{
        if(existingErrors && existingErrors !== errors){
            const keys = Object.keys(existingErrors);
            let touched = {}
            keys.forEach(key => {// @ts-ignore
                touched[key] = true})
            setTouched(touched)
        }
    },[existingErrors,errors])*/

    useEffect(()=>{
        console.log("updating.")
        updateValues()
    },[existingValue])
    /*useEffect(()=>{
        updateErrors()
        updateTouched()
    },[existingErrors])*/


    /*useEffect(()=>{console.log("values",values)},[values])
    useEffect(()=>{console.log("values",errors)},[errors])
*/

    const formContent = (onSubmit) ? <form onSubmit={handleSubmit}>{children}</form> : children

    return <FormGeneratorContext.Provider value={{values,errors, touched, setFieldValue,elements, submitForm,accessorRoot}}>
        {formContent}
    </FormGeneratorContext.Provider>
}
