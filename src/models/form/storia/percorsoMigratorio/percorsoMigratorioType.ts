import {FormElements} from "../../../../form-generator/ElementInterface";

export const percorsoMigratorioFormElements :FormElements = [
    {
        Header:"Anno partenza",
        accessor:"annoPartenza",
        type:"text",
    },
    {
        Header:"Luogo partenza",
        accessor:"luogoPartenza",
        type:"text",
    },
    {
        Header:"Ragioni dell'espatrio",
        accessor:"ragioniEspatrio",
        type:"text",
    },
    {
        Header:"Eventuali timori manifestati",
        accessor:"eventualiTimoriManifestati",
        type:"wysiwyg",
    }
]

export const percorsoMigratorioValues = {
    annoPartenza:null,
    luogoPartenza:null,
    ragioniEspatrio:null,
    eventualiTimoriManifestati:null
}
