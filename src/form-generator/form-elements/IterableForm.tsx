import {useContext} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import {getNestedValue} from "./utils/form-generator-utils";
import {Button} from "react-bootstrap";

interface IterableFormInterface{
    accessor:string,
    buttonLabel:string,
    initialValue:any,
    form:(index:number) => JSX.Element
}

export const IterableForm = ({accessor,buttonLabel,initialValue,form}:IterableFormInterface) => {
    const {setFieldValue,values} = useContext(FormGeneratorContext);
    const existing = getNestedValue(accessor,values).length
    return <div>
        <Button type="button" onClick={(e)=>{
            e.preventDefault()
            setFieldValue(`${accessor}[${existing}]`,initialValue)
        }}>{buttonLabel}</Button>
        {getNestedValue(`${accessor}`,values).map((element:any,index:number)=><>
            {form(index)}
        </>)}
    </div>
}
