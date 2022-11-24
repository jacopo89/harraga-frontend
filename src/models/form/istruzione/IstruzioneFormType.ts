import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {
    percorsoIstruzioneOrigineFormElements,
    percorsoIstruzioneOrigineInitialValues
} from "./percorsoIstruzioneOrigine/PercorsoIstruzioneOrigineFormType";
import {
    percorsoIstruzioneItaliaFormElements,
    percorsoIstruzioneItaliaInitialValues
} from "./percorsoIstruzioneItalia/PercorsoIstruzioneItaliaFormType";
import {
    percorsoIstruzioneItaliaConclusoFormElements,
    percorsoIstruzioneItaliaConclusoInitialValues
} from "./percorsoIstruzioneItaliaConcluso/PercorsoIstruzioneItaliaConclusoType";


export const istruzioneFormElements:FormElements = [
    {
        Header: "Percorsi d'istruzione e formazione nel paese d'origine",
        accessor: 'percorsoIstruzioneOrigines',
        type: "collection",
        formElements:percorsoIstruzioneOrigineFormElements,
        initialValues:percorsoIstruzioneOrigineInitialValues,
    },
    {
        Header: "Percorsi d'istruzione e formazione in Italia conclusi",
        accessor: 'percorsoIstruzioneItaliaConclusos',
        type: "collection",
        formElements:percorsoIstruzioneItaliaConclusoFormElements,
        initialValues:percorsoIstruzioneItaliaConclusoInitialValues,
    },
    {
        Header: "Percorsi d'istruzione e formazione in corso in Italia\n",
        accessor: 'percorsoIstruzioneFormazioneItalias',
        type: "collection",
        formElements:percorsoIstruzioneItaliaFormElements,
        initialValues:percorsoIstruzioneItaliaInitialValues,
    },
]


export const istruzioneInitialValues = {
    percorsoIstruzioneOrigines:[],
    percorsoIstruzioneItaliaConclusos:[],
    percorsoIstruzioneFormazioneItalias:[],
};

export const istruzioneValidationSchema = Yup.object().shape({
});


