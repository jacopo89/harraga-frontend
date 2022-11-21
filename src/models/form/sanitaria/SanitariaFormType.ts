import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {patologiaAllergicaElements} from "./patologiaAllergicas/PatologiaAllergicaFormType";
import {medicoCuranteElements} from "./medicoCurante/MedicoCuranteFormType";
import {specificaDisabilitaElements} from "./specificaDisabilitas/SpecificaDisabilitaFormType";
import {presoInCaricoElements} from "./presoInCarico/PresoIncaricoFormType";
import {vaccinoElements} from "./vaccini/VaccinoFormType";
import {visiteElements} from "./visite/VisiteFormType";

export const sanitariaElements:FormElements = [
    {
        Header: 'Specifiche disabilità',
        accessor: 'specificaDisabilitas',
        type: "collection",
        formElements:specificaDisabilitaElements
    },
    {
        Header: 'Patologie allergiche',
        accessor: 'patologiaAllergicas',
        type: "collection",
        formElements:patologiaAllergicaElements
    },
    {
        Header: 'Medico curante',
        accessor: 'medicoCurante',
        type: "embedded",
        formElements:medicoCuranteElements
    },
    {
        Header: 'Preso in carico',
        accessor: 'presoInCarico',
        type: "embedded",
        formElements:presoInCaricoElements
    },
    {
        Header: 'Vaccini',
        accessor: 'vaccinos',
        type: "collection",
        formElements:vaccinoElements
    },
    {
        Header: 'Visite',
        accessor: 'visitas',
        type: "collection",
        formElements:visiteElements
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


