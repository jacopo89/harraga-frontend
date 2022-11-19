import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {permessoSoggiornoElements} from "./permessoSoggiorno/PermessoSoggiornoType";
import {provvedimentoGiudiziarioElements} from "./provvedimentoGiudiziario/ProvvedimentoGiudiziarioType";
import { riferimentoLegaleElements } from "./riferimentoLegale/RiferimentoLegaleType";
import {revocaTutelaElements} from "./revocaTutela/RevocaTutelaType";
import { pattoAccoglienzaElements } from "./pattoAccoglienza/PattoAccoglienzaType";
import { tesseraSanitariaElements } from "./tesseraSanitaria/TesseraSanitariaType";
import { STPElements } from "./STP/STPType";
import { codiceFiscaleElements } from "./codiceFiscale/CodiceFiscaleType";
import {documentoIdentitaAmministrativaElements} from "./documentoIdentita/DocumentoIdentitaType";
import {fotoSegnalazioneElements} from "./fotoSegnalazione/FotoSegnalazioneType";
import {affidamentoElements} from "./affidamento/AffidamentoType";
import {proceduraLegaleElements} from "./proceduraLegale/ProceduraLegaleType";
import {proseguimentoAmministrativoElements} from "./proseguimentoAmministrativo/ProseguimentoAmministrativoType";

export const amministrativaElements:FormElements = [
    {
        accessor:"permessoSoggiornos",
        Header:"Permesso Soggiorno",
        type:"collection",
        formElements:permessoSoggiornoElements
    },
    {
        accessor:"provvedimentoGiudiziarios",
        Header:"Provvedimenti Giudiziari",
        type:"collection",
        formElements:provvedimentoGiudiziarioElements
    },
    {
        accessor:"riferimentoLegale",
        Header:"Riferimento Legale",
        type:"embedded",
        formElements:riferimentoLegaleElements
    },
    {
        accessor:"revocaTutela",
        Header:"Revoca Tutela",
        type:"embedded",
        formElements:revocaTutelaElements
    },
    {
        accessor:"pattoAccoglienza",
        Header:"Patto Accoglienza",
        type:"embedded",
        formElements:pattoAccoglienzaElements
    },
    {
        accessor:"tesseraSanitaria",
        Header:"Tessera sanitaria",
        type:"embedded",
        formElements:tesseraSanitariaElements
    },
    {
        accessor:"STP",
        Header:"STP",
        type:"embedded",
        formElements:STPElements
    },
    {
        accessor:"codiceFiscale",
        Header:"Codice Fiscale",
        type:"embedded",
        formElements:codiceFiscaleElements
    },
    {
        accessor:"documentiIdentitaAmministrativas",
        Header:"Documenti Identità amministrativi",
        type:"collection",
        formElements:documentoIdentitaAmministrativaElements
    },
    {
        accessor:"fotoSegnalazione",
        Header:"Foto segnalazione",
        type:"embedded",
        formElements:fotoSegnalazioneElements
    },
    {
        accessor:"affidamento",
        Header:"Affidamento",
        type:"embedded",
        formElements:affidamentoElements
    },
    {
        accessor:"proseguimentoAmministrativo",
        Header:"Proseguimento Amministrativo",
        type:"embedded",
        formElements:proseguimentoAmministrativoElements
    },

    {
        accessor:"proceduraLegales",
        Header:"Procedure Legali",
        type:"collection",
        formElements:proceduraLegaleElements
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
