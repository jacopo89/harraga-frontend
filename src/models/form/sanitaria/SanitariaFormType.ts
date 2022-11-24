import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {patologiaAllergicaElements, patologiaValues} from "./patologiaAllergicas/PatologiaAllergicaFormType";
import {medicoCuranteElements, medicoCuranteValues} from "./medicoCurante/MedicoCuranteFormType";
import {
    specificaDisabilitaElements,
    specificaDisabilitaValues
} from "./specificaDisabilitas/SpecificaDisabilitaFormType";
import {presoInCaricoElements, presoInCaricoInitialValues} from "./presoInCarico/PresoIncaricoFormType";
import {vaccinoElements, vaccinoInitialValues} from "./vaccini/VaccinoFormType";
import {visitaInitialValues, visiteElements} from "./visite/VisiteFormType";

export const sanitariaElements:FormElements = [
    {
        Header: 'Specifiche disabilità',
        accessor: 'specificaDisabilitas',
        type: "collection",
        formElements:specificaDisabilitaElements,
        initialValues:specificaDisabilitaValues
    },
    {
        Header: 'Patologie allergiche',
        accessor: 'patologiaAllergicas',
        type: "collection",
        formElements:patologiaAllergicaElements,
        initialValues:patologiaValues
    },
    {
        Header: 'Medico curante',
        accessor: 'medicoCurante',
        type: "embedded",
        formElements:medicoCuranteElements,
        initialValues:medicoCuranteValues
    },
    {
        Header: 'Preso in carico',
        accessor: 'presoInCarico',
        type: "embedded",
        formElements:presoInCaricoElements,
        initialValues:presoInCaricoInitialValues
    },
    {
        Header: 'Vaccini',
        accessor: 'vaccinos',
        type: "collection",
        formElements:vaccinoElements,
        initialValues:vaccinoInitialValues
    },
    {
        Header: 'Visite',
        accessor: 'visitas',
        type: "collection",
        formElements:visiteElements,
        initialValues:visitaInitialValues
    },
]


export const sanitariaInitialValues = {
    specificaDisabilitas:[],
    patologiaAllergicas:[],
    medicoCurante:null,
    presoInCarico:null,
    vaccinos:[],
    visitas:[],
};

export const sanitariaValidationSchema = Yup.object().shape({
});


