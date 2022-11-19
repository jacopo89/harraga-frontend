import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const getUtentiRoute = createRoute("/api/utentes")
const getcartelleSocialiUtenteRoute = (id:string) => createRoute(`/api/utentes/${id}/utente_cartella_sociales`)
const postAssociazioneCartellaSocialeUtenteRoute = createRoute(`/api/utente_cartella_sociales`)

export const getUtenti = () => {
    return authClient.get(getUtentiRoute)
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
