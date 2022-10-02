import FormElementGenerator from "./FormElementGenerator";
import {useContext, useEffect} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {getAccessorElementsNoIndex} from "./utils/form-generator-utils";

interface FormElementInterface {
    accessor:string,
    nestedForm?:JSX.Element
}

function getElement(elements: GenericElementInterface[], accessorParsed: string[]) {
    let element = null;
    let haystack = elements;
    accessorParsed.forEach((accessor) => {
        if(haystack === undefined) return
        if(Array.isArray(haystack)){
            const piece = haystack.find(formElement => formElement.accessor === accessor);
            // @ts-ignore
            haystack = piece?.formElements;
            element = piece;
        }
    })

    return element;
}

export default function FormElement({accessor,nestedForm}:FormElementInterface){
    const {values,errors,touched,setFieldValue,elements,accessorRoot} = useContext(FormGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);
    const finalAccessor = (accessorRoot) ? `${accessorRoot}.${accessor}` : accessor
    console.log("final accessor",finalAccessor)
    if(element){
        // @ts-ignore
        return <FormElementGenerator nestedForm={nestedForm} {...element} accessorRoot={accessorRoot} type={element.type} values={values} errors={errors} touched={touched} setFieldValue={(value) => setFieldValue(finalAccessor, value)} Header={element.Header} accessor={finalAccessor}/>
    }
    return <div>{accessor}</div>

}
