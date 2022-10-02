import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues, domicilioInitialValues,
    validationSchema
} from "../../models/form/anagrafica/AnagraficaFormType";
import {Button} from "react-bootstrap";
import FormElement from "../../form-generator/form-elements/FormElement";
import {useNavigate} from "react-router";
import {useContext} from "react";
import FormGeneratorContext from "../../form-generator/form-context/FormGeneratorContext";
import {getNestedValue} from "../../form-generator/form-elements/utils/form-generator-utils";

export default function (){

    const navigate = useNavigate();
    const onSubmit = (values:any) => {
        console.log("values",values)
        //postCartellaSociale(values).then(response => navigate(editCartellaSocialeRoute(response.data.id))).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={anagraficaElements} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={anagraficaInitialValues}>
            <FormElement accessor={"anagrafica.nome"}/>
            <IterableForm form={DomicilioForm} buttonLabel={"Aggiungi domicilio"} accessor={"anagrafica.domicilio"}/>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}

const DomicilioForm = (index:number) => {
    return <div>
        <FormElement accessor={`anagrafica.domicilio[${index}].tipologiaDomicilio`}/>
    </div>
}


interface IterableFormInterface{
    accessor:string,
    buttonLabel:string,
    form:(index:number) => JSX.Element
}

const IterableForm = ({accessor,buttonLabel,form}:IterableFormInterface) => {
    const {setFieldValue,values} = useContext(FormGeneratorContext);
    const existing = getNestedValue(accessor,values).length
    return <div>
        <Button type="button" onClick={(e)=>{
            e.preventDefault()
            setFieldValue(`${accessor}[${existing}]`,domicilioInitialValues)
        }}>{buttonLabel}</Button>
        {getNestedValue(`${accessor}`,values).map((element:any,index:number)=><>
            {form(index)}
        </>)}
    </div>
}
