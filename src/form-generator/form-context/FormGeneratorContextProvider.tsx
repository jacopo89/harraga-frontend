import {FormikErrors, FormikTouched, FormikValues, useFormik} from "formik";
import {useCallback, useEffect} from "react";
import FormGeneratorContext from "./FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {GenericResponse} from "../../helpers/response/GenericResponse";

export interface FormGeneratorProviderInterface{
    elements: GenericElementInterface[]
    validationSchema?:any,
    onSubmit: (values:any) => void | Promise<any>
    initialValues:FormikValues
    children?:any,
    existingValue?:FormikValues,
    existingErrors?: FormikErrors<FormikValues>|undefined
    existingTouched?: FormikTouched<FormikValues>|undefined
}

export default function FormGeneratorContextProvider({elements, validationSchema, initialValues,onSubmit, children, existingValue,existingErrors}:FormGeneratorProviderInterface){
    const onSubmitHandler = (values:FormikValues) => {
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

    const formik = useFormik({ initialValues, validationSchema, onSubmit:onSubmitHandler });
    const { handleSubmit, setValues, values, touched, errors, setFieldValue,setErrors, setTouched,submitForm } = formik;

    const updateValues = useCallback(()=>{
        if(existingValue && existingValue !== values) {
            setValues(existingValue)
        }
    },[existingValue,values])

    const updateErrors = useCallback(()=>{
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
    },[existingErrors,errors])

    useEffect(()=>{
        updateValues()
    },[existingValue])
    useEffect(()=>{
        updateErrors()
        updateTouched()
    },[existingErrors])

    useEffect(()=>{console.log("values",values)},[values])


    return <FormGeneratorContext.Provider value={{values,errors, touched, setFieldValue,elements, submitForm}}>
        <form onSubmit={handleSubmit}>
        {children}
        </form>
    </FormGeneratorContext.Provider>
}
