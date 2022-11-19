import {FormElements} from "../../../../form-generator/ElementInterface";

export const affidamentoElements: FormElements = [
    {
        accessor:"dataVerbaleAffidamento",
        Header: "Data Verbale affidamento",
        type:"date"
    },
    {
        accessor:"dataProvvedimentoAffidamento",
        Header: "Data Provvedimento affidamento",
        type:"date"
    },
    {
        accessor:"autoritaAffido",
        Header: "Autorità che dispone l'affido",
        type:"text"
    },
    {
        accessor:"verbaleAffidamento",
        Header: "Verbale affidamento provvisorio ex art. 403 CC",
        type:"file"
    },
    {
        accessor:"provvedimentoAffidamentoDefinitivo",
        Header: "Provvedimento di affidamento definitivo emesso dal Tribunale per i Minorenni",
        type:"file"
    }
]


export const affidamentoInitialValues= {
    autoritaAffido:null,
    provvedimentoAffidamentoDefinitivo:null,
    verbaleAffidamento:null
}
