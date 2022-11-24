import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {permessoSoggiornoElements, permessoSoggiornoInitialValues} from "./permessoSoggiorno/PermessoSoggiornoType";
import {
    provvedimentoGiudiziarioElements,
    provvedimentoGiudiziarioInitialValues
} from "./provvedimentoGiudiziario/ProvvedimentoGiudiziarioType";
import {riferimentoLegaleElements, riferimentoLegaleInitialValues} from "./riferimentoLegale/RiferimentoLegaleType";
import {revocaTutelaElements, revocaTutelaInitialValues} from "./revocaTutela/RevocaTutelaType";
import {pattoAccoglienzaElements, pattoAccoglienzaInitialValues} from "./pattoAccoglienza/PattoAccoglienzaType";
import {tesseraSanitariaElements, tesseraSanitariaInitialValues} from "./tesseraSanitaria/TesseraSanitariaType";
import {STPElements, STPInitialValues} from "./STP/STPType";
import {codiceFiscaleElements, codiceFiscaleInitialValues} from "./codiceFiscale/CodiceFiscaleType";
import {
    documentoIdentitaAmministrativaElements,
    documentoIdentitaAmministrativaInitialValues
} from "./documentoIdentita/DocumentoIdentitaType";
import {fotoSegnalazioneElements, fotoSegnalazioneInitialValues} from "./fotoSegnalazione/FotoSegnalazioneType";
import {affidamentoElements, affidamentoInitialValues} from "./affidamento/AffidamentoType";
import {proceduraLegaleElements, proceduraLegaleInitialValues} from "./proceduraLegale/ProceduraLegaleType";
import {
    proseguimentoAmministrativoElements,
    proseguimentoAmministrativoInitialValues
} from "./proseguimentoAmministrativo/ProseguimentoAmministrativoType";

export const amministrativaElements:FormElements = [
    {
        accessor:"permessoSoggiornos",
        Header:"Permesso Soggiorno",
        type:"collection",
        formElements:permessoSoggiornoElements,
        initialValues:permessoSoggiornoInitialValues
    },
    {
        accessor:"provvedimentoGiudiziarios",
        Header:"Provvedimenti Giudiziari",
        type:"collection",
        formElements:provvedimentoGiudiziarioElements,
        initialValues:provvedimentoGiudiziarioInitialValues
    },
    {
        accessor:"riferimentoLegale",
        Header:"Riferimento Legale",
        type:"embedded",
        formElements:riferimentoLegaleElements,
        initialValues:riferimentoLegaleInitialValues
    },
    {
        accessor:"revocaTutela",
        Header:"Revoca Tutela",
        type:"embedded",
        formElements:revocaTutelaElements,
        initialValues:revocaTutelaInitialValues
    },
    {
        accessor:"pattoAccoglienza",
        Header:"Patto Accoglienza",
        type:"embedded",
        formElements:pattoAccoglienzaElements,
        initialValues:pattoAccoglienzaInitialValues
    },
    {
        accessor:"tesseraSanitaria",
        Header:"Tessera sanitaria",
        type:"embedded",
        formElements:tesseraSanitariaElements,
        initialValues:tesseraSanitariaInitialValues
    },
    {
        accessor:"STP",
        Header:"STP",
        type:"embedded",
        formElements:STPElements,
        initialValues:STPInitialValues
    },
    {
        accessor:"codiceFiscale",
        Header:"Codice Fiscale",
        type:"embedded",
        formElements:codiceFiscaleElements,
        initialValues:codiceFiscaleInitialValues
    },
    {
        accessor:"documentiIdentitaAmministrativas",
        Header:"Documenti Identità amministrativi",
        type:"collection",
        formElements:documentoIdentitaAmministrativaElements,
        initialValues:documentoIdentitaAmministrativaInitialValues
    },
    {
        accessor:"fotoSegnalazione",
        Header:"Foto segnalazione",
        type:"embedded",
        formElements:fotoSegnalazioneElements,
        initialValues:fotoSegnalazioneInitialValues
    },
    {
        accessor:"affidamento",
        Header:"Affidamento",
        type:"embedded",
        formElements:affidamentoElements,
        initialValues:affidamentoInitialValues
    },
    {
        accessor:"proseguimentoAmministrativo",
        Header:"Proseguimento Amministrativo",
        type:"embedded",
        formElements:proseguimentoAmministrativoElements,
        initialValues:proseguimentoAmministrativoInitialValues
    },

    {
        accessor:"proceduraLegales",
        Header:"Procedure Legali",
        type:"collection",
        formElements:proceduraLegaleElements,
        initialValues:proceduraLegaleInitialValues
    },
]


export const amministrativaInitialValues = {
    permessoSoggiornos:[],
    provvedimentoGiudiziarios:[],
    riferimentoLegale:null,
    revocaTutela:null,
    pattoAccoglienza:null,
    tesseraSanitaria:null,
    STP:null,
    codiceFiscale:null,
    documentiIdentitaAmministrativas:[],
    affidamento:null,
    proseguimentoAmministrativo:null,
    proceduraLegales:[]
};

export const amministrativaValidationSchema = Yup.object().shape({

});

export const cartellaSocialeValidationSchema = Yup.object().shape({
    amministrativa:amministrativaValidationSchema
})
