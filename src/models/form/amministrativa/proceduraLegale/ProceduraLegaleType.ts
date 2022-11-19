import {FormElements} from "../../../../form-generator/ElementInterface";
import {regolamentoDublinoElements} from "./regolamentoDublino/RegolamentoDublino";
import {appuntamentiElements} from "./appuntamenti/AppuntamentiType";
import {ricorsiAmministrativiElements} from "./ricorsoAmministrativo/RicorsoAmministrativo";

export const proceduraLegaleElements: FormElements = [
    {
        Header: "Regolamento di Dublino",
        accessor: "regolamentoDublino",
        type:"embedded",
        formElements: regolamentoDublinoElements,
    },
    {
        Header: "Appuntamenti",
        accessor: "appuntamenti",
        type:"collection",
        formElements: appuntamentiElements,
    },
    {
        Header: "Ricorsi amministrativi",
        accessor: "ricorsiAmministrativi",
        type:"collection",
        formElements: ricorsiAmministrativiElements,
    }
]

export const proceduraLegaleInitialValues= {
    regolamentoDublino:null,
    appuntamenti:[],
    ricorsiAmministrativi:[]
}
