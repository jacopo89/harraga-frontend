import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const getUtentiRoute = createRoute("/api/utentes")
const getcartelleSocialiUtenteRoute = (id:string) => createRoute(`/api/utentes/${id}/utente_cartella_sociales`)
const getUtenteInfo = (id:string) => createRoute(`/api/utentes/${id}`)
const cambiaPasswordUtenteRoute = (id:string) => createRoute(`/api/utentes/${id}/cambia_password`)
const postAssociazioneCartellaSocialeUtenteRoute = createRoute(`/api/utente_cartella_sociales`)
const deleteAssociazioneCartellaSocialeUtenteRoute = (id:string)=> createRoute(`/api/utente_cartella_sociales/${id}`)

export const getUtenti = () => {
    return authClient.get(getUtentiRoute)
}

export const getUtente = (id:string) => {
    return authClient.get(getUtenteInfo(id))
}
export const patchUtente = (id:string, data:any) => {
    return authClient.patch(getUtenteInfo(id), data)
}

export const cambiaPasswordUtente = (id:string, data:any) => {
    return authClient.patch(cambiaPasswordUtenteRoute(id), data)
}

export const getCartelleSocialiUtente = (id:string) => {
    return authClient.get(getcartelleSocialiUtenteRoute(id))
}

interface CreaAssociazioneCartellaUtente{
    "utente": string,
    "cartellaSociale": string,
    "ruolo": string
}

export const creaAssociazioneUtenteCartella = (values:CreaAssociazioneCartellaUtente) => {
    return authClient.post(postAssociazioneCartellaSocialeUtenteRoute,values)
}

export const rimuoviAssociazioneUtenteCartella = (id:string) => {
    return authClient.delete(deleteAssociazioneCartellaSocialeUtenteRoute(id))
}
