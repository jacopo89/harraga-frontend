import FormElementGenerator from "./FormElementGenerator";
import {useContext, useEffect} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";

interface FormElementInterface {
    accessor:string,
    nestedForm?:JSX.Element
}

export default function FormElement({accessor,nestedForm}:FormElementInterface){
    const {values,errors,touched,setFieldValue,elements} = useContext(FormGeneratorContext)
    const element = elements.find(elemento => {return elemento.accessor === accessor})
    if(element){
        // @ts-ignore
        return <FormElementGenerator nestedForm={nestedForm} {...element} type={element.type} values={values} errors={errors} touched={touched} setFieldValue={(value) => setFieldValue(accessor, value)} Header={element.Header} accessor={accessor}/>
    }
    return <div>{accessor}</div>

}
