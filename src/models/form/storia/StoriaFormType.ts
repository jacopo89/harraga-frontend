import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";
import {parenteFormElements} from "./parenti/ParenteFormType";
import {percorsoMigratorioFormElements} from "./percorsoMigratorio/percorsoMigratorioType";
import {hotspotFormElements} from "./hotspot/HotspotFormType";
import {CPAFormElements} from "./CPA/CPAFormType";
import {SecondaAccoglienzaFormElements} from "./secondaAccoglienza/SecondaAccoglienzaFormType";
import {allontanamentoFormElements} from "./allontanamento/AllontanamentoFormType";
import {peiFormElements} from "./pei/PEIFormType";
import {relazioneAssistenteSocialeFormElements} from "./relazioneAssistenteSociale/RelazioneAssistenteSocialeFormType";
import {affidoFormElements} from "./affido/AffidoFormType";
import {adozioneFormElements} from "./adozione/AdozioneFormType";
import {
    valutazioneMultidisciplinareFormElements
} from "./valutazioneMultidisciplinare/ValutazioneMultidisciplinareFormType";

export const storiaElements:FormElements = [
    {
        Header: 'Etnia',
        accessor: 'etnia',
        type: "text",
    },
    {
        Header: 'Particolari Osservanze',
        accessor: 'particolariOsservanze',
        type: "text",
    },
    {
        Header: 'Parenti',
        accessor: 'parentes',
        type: "collection",
        formElements:parenteFormElements
    },
    {
        Header: 'Percorsi migratori',
        accessor: 'percorsoMigratorios',
        type: "collection",
        formElements:percorsoMigratorioFormElements
    },
    {
        Header: 'Hotspot',
        accessor: 'hotspot',
        type: "embedded",
        formElements:hotspotFormElements
    },
    {
        Header: 'CPA',
        accessor: 'cPA',
        type: "embedded",
        formElements:CPAFormElements
    },
    {
        Header: 'Seconda Accoglienza',
        accessor: 'secondaAccoglienza',
        type: "embedded",
        formElements:SecondaAccoglienzaFormElements
    },
    {
        Header: 'Allontanamenti',
        accessor: 'allontanamentos',
        type: "collection",
        formElements:allontanamentoFormElements
    },
    {
        Header: 'PEI',
        accessor: 'progettoEducativoIndividuales',
        type: "collection",
        formElements:peiFormElements
    },
    {
        Header: 'Relazione assistente sociale',
        accessor: 'relazioneAssistenteSociales',
        type: "collection",
        formElements:relazioneAssistenteSocialeFormElements
    },
    {
        Header: 'Affido',
        accessor: 'affidos',
        type: "collection",
        formElements:affidoFormElements
    },
    {
        Header: 'Adozione',
        accessor: 'adoziones',
        type: "collection",
        formElements:adozioneFormElements
    },
    {
        Header: 'Valutazione multidisciplinare',
        accessor: 'valutazioneMultidisciplinare',
        type: "embedded",
        formElements:valutazioneMultidisciplinareFormElements
    },
    {
        Header: 'Informazioni vita minore',
        accessor: 'informazioniVitaMinore',
        type: "wysiwyg",
    },
    {
        Header: 'Scuola',
        accessor: 'scuola',
        type: "wysiwyg",
    },
    {
        Header: 'Hobbies',
        accessor: 'hobbies',
        type: "wysiwyg",
    },
    {
        Header: 'Ragioni espatrio',
        accessor: 'ragioniEspatrio',
        type: "wysiwyg",
    },
    {
        Header: 'Timori manifestati',
        accessor: 'timoriManifestatiRientroPaeseOrigine',
        type: "wysiwyg",
    },
    {
        Header: 'Informazioni viaggio ',
        accessor: 'informazioniViaggioPaeseOrigine',
        type: "wysiwyg",
    },
    {
        Header: 'Osservazioni degli educatori',
        accessor: 'osservazioniEducatori',
        type: "wysiwyg",
    },
    {
        Header: 'Area multidisciplinare per la pianificazione interventi dall\'equipe alla luce di una valutazione del superiore interesse del minore',
        accessor: 'areaMultidisciplinare',
        type: "wysiwyg",
    },
    {
        Header: 'Diario degli interventi degli operatori',
        accessor: 'diarioInterventi',
        type: "wysiwyg",
    },



]


export const storiaInitialValues = {
    etnia:null,
    particolariOsservanze:null,
    parentes:[],
    percorsoMigratorios:[],
    hotspot:null,
    cPA:null,
    secondaAccoglienza:null,
    allontanamentos:[],
    relazioneAssistenteSociales:[],
    progettoEducativoIndividuales:[],
    affidos:[],
    adoziones:[],
    valutazioneMultidisciplinare:null,
    informazioniViaggioPaeseOrigine:null,
    osservazioniEducatori:null,
    timoriManifestatiRientroPaeseOrigine:null,
    ragioniEspatrio:null,
    scuola:null,
    informazioniVitaMinore:null,
    areaMultidisciplinare:null,
    diarioInterventi:null,


};

export const storiaValidationSchema = Yup.object().shape({
});


