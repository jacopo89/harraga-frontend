import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import {
    anagraficaElements,
    anagraficaInitialValues,
    validationSchema
} from "../../models/form/anagrafica/AnagraficaFormType";
import {Button} from "react-bootstrap";
import FormElement from "../../form-generator/form-elements/FormElement";
import {useNavigate} from "react-router";

export default function (){

    const navigate = useNavigate();
    const onSubmit = (values:any) => {
        console.log("values",values)
        //postCartellaSociale(values).then(response => navigate(editCartellaSocialeRoute(response.data.id))).catch(error => toast.error("Errore nella creazione della cartella sociale"))
    }

    return <div>
        <FormGeneratorContextProvider elements={anagraficaElements} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={anagraficaInitialValues}>
            <FormElement accessor={"anagrafica.nome"}/>
            <Button type="submit"> OK</Button>
        </FormGeneratorContextProvider>
    </div>
}
