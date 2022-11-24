import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {specificaDisabilitaElements} from "../sanitaria/specificaDisabilitas/SpecificaDisabilitaFormType";
import {
    esperienzeInitialValues,
    esperienzeVolontariatoElements
} from "./esperienzeVolontariato/EsperienzeVolontariatoFormType";
import {laboratorioElements, laboratorioInitialValues} from "./laboratori/LaboratorioFormType";
import {attivitaSportivaElements, attivitaSportivaInitialValues} from "./attivitaSportiva/AttivitaSportivaFormType";
import {associazioneElements, associazioneInitialValues} from "./associazione/AssociazioneFormType";

export const socialitaElements:FormElements = [
    {
        Header: 'Esperienze di volontariato',
        accessor: 'esperienzaVolontariatos',
        type: "collection",
        formElements:esperienzeVolontariatoElements,
        initialValues:esperienzeInitialValues
    },
    {
        Header: 'Laboratori',
        accessor: 'laboratorios',
        type: "collection",
        formElements:laboratorioElements,
        initialValues:laboratorioInitialValues
    },
    {
        Header: 'Attività sportive',
        accessor: 'attivitaSportivas',
        type: "collection",
        formElements:attivitaSportivaElements,
        initialValues:attivitaSportivaInitialValues
    },
    {
        Header: 'Associazioni',
        accessor: 'associaziones',
        type: "collection",
        formElements:associazioneElements,
        initialValues:associazioneInitialValues
    },
]


export const socialitaInitialValues = {
    esperienzaVolontariatos:[],
    laboratorios:[],
    attivitaSportivas:[],
    associaziones:[],
};

export const socialitaValidationSchema = Yup.object().shape({
});


