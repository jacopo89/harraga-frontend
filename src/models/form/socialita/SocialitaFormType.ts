import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {specificaDisabilitaElements} from "../sanitaria/specificaDisabilitas/SpecificaDisabilitaFormType";
import {esperienzeVolontariatoElements} from "./esperienzeVolontariato/EsperienzeVolontariatoFormType";
import {laboratorioElements} from "./laboratori/LaboratorioFormType";
import {attivitaSportivaElements} from "./attivitaSportiva/AttivitaSportivaFormType";
import {associazioneElements} from "./associazione/AssociazioneFormType";

export const socialitaElements:FormElements = [
    {
        Header: 'Esperienze di volontariato',
        accessor: 'esperienzaVolontariatos',
        type: "collection",
        formElements:esperienzeVolontariatoElements
    },
    {
        Header: 'Laboratori',
        accessor: 'laboratorios',
        type: "collection",
        formElements:laboratorioElements
    },
    {
        Header: 'Attività sportive',
        accessor: 'attivitaSportivas',
        type: "collection",
        formElements:attivitaSportivaElements
    },
    {
        Header: 'Associazioni',
        accessor: 'associaziones',
        type: "collection",
        formElements:associazioneElements
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


