import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {lingueDichiarateElements} from "./lingueDichiarate/LingueDichiarateFormType";
import {lingueAttestateElements} from "./lingueAttestate/LingueAttestateFormType";
import {lingueCertificateElements} from "./lingueCertificate/LingueCertificateFormType";
import {competenzeDigitaliElements} from "./competenzeDigitali/CompetenzeDigitaliFormType";
import {patenteElements} from "./patenti/PatenteFormType";
import {altreCompetenzeElements} from "./altreCompetenze/AltreCompetenzeFormType";

export const competenzeElements:FormElements = [
    {
        Header: 'Lingue dichiarate',
        accessor: 'linguaDichiaratas',
        type: "collection",
        formElements:lingueDichiarateElements
    },
    {
        Header: 'Lingue attestate',
        accessor: 'linguaAttestatas',
        type: "collection",
        formElements:lingueAttestateElements
    },
    {
        Header: 'Lingue certificate',
        accessor: 'linguaCertificatas',
        type: "collection",
        formElements:lingueCertificateElements
    },
    {
        Header: 'Competenze digitali',
        accessor: 'competenzaDigitales',
        type: "collection",
        formElements:competenzeDigitaliElements
    },
    {
        Header: 'Associazioni',
        accessor: 'altraCompetenzas',
        type: "collection",
        formElements:altreCompetenzeElements
    },
    {
        Header: 'Associazioni',
        accessor: 'patentes',
        type: "collection",
        formElements:patenteElements
    },
]


export const competenzeInitialValues = {
    linguaAttestatas:[],
    linguaDichiaratas:[],
    altraCompetenzas:[],
    competenzaDigitales:[],
    linguaCertificatas:[],
    patentes:[],
};

export const competenzeValidationSchema = Yup.object().shape({
});


