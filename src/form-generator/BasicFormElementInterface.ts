import ElementInterface from "./ElementInterface";
import {FormikErrors, FormikTouched, FormikValues} from "formik";

export default interface BasicFormElementInterface extends ElementInterface{
    values:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>
    accessorRoot?:string
}
