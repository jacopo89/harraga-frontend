import {FormElements} from "../../../../form-generator/ElementInterface";

const valutazioneFormElements:FormElements = [
    {
        Header: "Valutazione",
        accessor: "valutazione",
        type:"file"
    },
]

const valutazioneInitialValues = {
    valutazione:null
}

export const percorsoIstruzioneItaliaFormElements:FormElements = [
    {
        Header: 'Tipologia',
        accessor: 'tipologia',
        type: "select",
        options:[
            {label:"Formale", value:"formale"},
            {label:"Informale", value:"informale"},
        ]
    },
    {
        Header: "Indirizzo Studi",
        accessor: "indirizzoStudi",
        type:"text"
    },
    {
        Header: "Data inizio",
        accessor: "dataInizio",
        type:"date"
    },
    {
        Header: "Data fine prevista",
        accessor: "dataFinePrevista",
        type:"date"
    },
    {
        Header: "Classe/Gruppo",
        accessor: "classe",
        type:"text"
    },
    {
        Header: "Istituto",
        accessor: "istituto",
        type:"text"
    },
    {
        Header: "Orari e giorni",
        accessor: "orariGiorni",
        type:"wysiwyg"
    },
    {
        Header: "Progetto formativo",
        accessor: "progettoFormativo",
        type:"file"
    },
    {
        Header: "Patto formativo",
        accessor: "pattoFormativo",
        type:"file"
    },
    {
        Header: "Bilancio competenze",
        accessor: "bilancioCompetenze",
        type:"file"
    },
    {
        Header: "Valutazioni",
        accessor: "valutaziones",
        type:"collection",
        formElements:valutazioneFormElements,
        initialValues:valutazioneInitialValues
    },

]


export const percorsoIstruzioneItaliaInitialValues = {
    tipologia:null,
    indirizzoStudi:null,
    dataInizio:null,
    dataFinePrevista:null,
    classe:null,
    istituto:null,
    orariGiorni:null,
    progettoFormativo:null,
    pattoFormativo:null,
    bilancioCompetenze:null,
    valutaziones:[],

};
