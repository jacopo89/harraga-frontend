import {FormikErrors, FormikTouched, FormikValues, useFormik} from "formik";
import {useCallback, useEffect} from "react";
import FormGeneratorContext from "./FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {GenericResponse} from "../../helpers/response/GenericResponse";
import {isArrayElementAccessor} from "../form-elements/utils/form-generator-utils";

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
    existingTouched?: FormikTouched<FormikValues>|undefined,
    formValue?: FormikValues|undefined
}

type Props = CommonProps & ConditionalProps

export default function FormGeneratorContextProvider({formValue, elements, validationSchema, initialValues,onSubmit, children, existingValue,existingErrors, accessorRoot, onChange}:Props){
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

    const updateWhenValuesChange = useCallback(()=>{

        if(accessorRoot && values!==initialValues){
            if(values!==existingValue){
                onChange(values)
            }
        }
    },[values, existingValue,accessorRoot,initialValues])

    useEffect(()=>{
        updateWhenValuesChange()
    },[values])

    useEffect(()=>{
        updateValues()
    },[existingValue])

    useEffect(()=>{console.log("values",values)},[values])


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


    /*useEffect(()=>{
        updateErrors()
        updateTouched()
    },[existingErrors])*/


    /*useEffect(()=>{console.log("values",values)},[values])
    useEffect(()=>{console.log("values",errors)},[errors])
*/

    const formContent = (onSubmit) ? <form onSubmit={handleSubmit}>{children}</form> : children

    const unsetFieldValue = (accessor:string) => {
        if(isArrayElementAccessor(accessor)){
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if(arrayAccessorStartingPosition !==-1){
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1,-1));
                const collectionAccessor = accessor.slice(0,arrayAccessorStartingPosition);
                const array:any[] = values[collectionAccessor];
                const newArray = array.filter((item,index) => index !== indexToRemove )
                const newValues = values;
                newValues[collectionAccessor] = newArray;
                setValues(newValues)
            }
        }else{
            const newValues = values;
            delete newValues[accessor]
            setValues(newValues)
        }

    }

    return <FormGeneratorContext.Provider value={{formValue:values,values,errors, touched, setFieldValue, unsetFieldValue, elements, submitForm,accessorRoot}}>
        {formContent}
    </FormGeneratorContext.Provider>
}
