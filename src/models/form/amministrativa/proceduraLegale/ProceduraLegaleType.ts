import {FormElements} from "../../../../form-generator/ElementInterface";
import {regolamentoDublinoElements, regolamentoDublinoInitialValues} from "./regolamentoDublino/RegolamentoDublino";
import {appuntamentiElements, appuntamentiInitialValues} from "./appuntamenti/AppuntamentiType";
import {
    ricorsiAmministrativiElements,
    ricorsiAmministrativiInitialValues
} from "./ricorsoAmministrativo/RicorsoAmministrativo";

export const proceduraLegaleElements: FormElements = [
    {
        Header: "Regolamento di Dublino",
        accessor: "regolamentoDublino",
        type:"embedded",
        formElements: regolamentoDublinoElements,
        initialValues: regolamentoDublinoInitialValues
    },
    {
        Header: "Appuntamenti",
        accessor: "appuntamenti",
        type:"collection",
        formElements: appuntamentiElements,
        initialValues:appuntamentiInitialValues
    },
    {
        Header: "Ricorsi amministrativi",
        accessor: "ricorsiAmministrativi",
        type:"collection",
        formElements: ricorsiAmministrativiElements,
        initialValues:ricorsiAmministrativiInitialValues
    }
]

export const proceduraLegaleInitialValues= {
    regolamentoDublino:null,
    appuntamenti:[],
    ricorsiAmministrativi:[]
}
