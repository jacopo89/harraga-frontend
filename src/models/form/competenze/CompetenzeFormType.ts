import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {lingueDichiarateElements, lingueDichiarateInitialValues} from "./lingueDichiarate/LingueDichiarateFormType";
import {lingueAttestateElements, lingueAttestateInitialValues} from "./lingueAttestate/LingueAttestateFormType";
import {lingueCertificateElements, lingueCertificateInitialValues} from "./lingueCertificate/LingueCertificateFormType";
import {
    competenzeDigitaliElements,
    competenzeDigitaliInitialValues
} from "./competenzeDigitali/CompetenzeDigitaliFormType";
import {patenteElements, patenteInitialValues} from "./patenti/PatenteFormType";
import {altreCompetenzeElements, altreCompetenzeInitialValues} from "./altreCompetenze/AltreCompetenzeFormType";

export const competenzeElements:FormElements = [
    {
        Header: 'Lingue dichiarate',
        accessor: 'linguaDichiaratas',
        type: "collection",
        formElements:lingueDichiarateElements,
        initialValues:lingueDichiarateInitialValues,
    },
    {
        Header: 'Lingue attestate',
        accessor: 'linguaAttestatas',
        type: "collection",
        formElements:lingueAttestateElements,
        initialValues: lingueAttestateInitialValues
    },
    {
        Header: 'Lingue certificate',
        accessor: 'linguaCertificatas',
        type: "collection",
        formElements:lingueCertificateElements,
        initialValues: lingueCertificateInitialValues
    },
    {
        Header: 'Competenze digitali',
        accessor: 'competenzaDigitales',
        type: "collection",
        formElements:competenzeDigitaliElements,
        initialValues:competenzeDigitaliInitialValues
    },
    {
        Header: 'Associazioni',
        accessor: 'altraCompetenzas',
        type: "collection",
        formElements:altreCompetenzeElements,
        initialValues:altreCompetenzeInitialValues
    },
    {
        Header: 'Associazioni',
        accessor: 'patentes',
        type: "collection",
        formElements:patenteElements,
        initialValues:patenteInitialValues
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


