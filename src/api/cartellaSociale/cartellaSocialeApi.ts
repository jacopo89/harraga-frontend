import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";
import AuthClient from "../AuthClient";

const getCartellaSocialeRoute = createRoute("/api/cartella_sociales")
const getCartellaSocialeUtenteRoute = (id:string)=> createRoute(`/api/utentes/${id}/utente_cartella_sociales`)
const postCartellaSocialeRoute = createRoute("/api/cartella_sociales")
const getCartellaSocialeAnagraficaRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/anagrafica`)
const deleteCartellaSocialeRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}`)
const getCartellaSocialeAmministrativaRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/amministrativa`)
const getCartellaSocialeStoriaRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/storia`)
const getCartellaSocialeSanitariaRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/sanitaria`)
const getCartellaSocialeSocialitaRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/socialita`)
const getCartellaSocialeCompetenzeRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/competenze`)
const getCartellaSocialeLavoroRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/lavoro`)
const getCartellaSocialeIstruzioneRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/istruzione`)
const getCartellaSocialePenaleRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/penale`)
const getCartellaSocialeDesideriRoute = (id:string) => createRoute(`/api/cartella_sociales/${id}/desideri`)

export const getCartelleSociali = (filters:any ={}) => {
    return AuthClient.get(getCartellaSocialeRoute,filters)
}

export const getCartelleSocialiUtente = (utenteId:string, filters:any={}) => {
    return AuthClient.get(getCartellaSocialeUtenteRoute(utenteId),filters)
}

export const rimuoviCartellaSociale = (id:string) =>{
    return authClient.delete(deleteCartellaSocialeRoute(id))
}

export const postCartellaSociale = (values:any) => {
    return authClient.post(postCartellaSocialeRoute,values)
}

export const getCartellaSocialeAnagrafica = (id:string) =>{
    return authClient.get(getCartellaSocialeAnagraficaRoute(id))
}

export const getCartellaSocialeAmministrativa = (id:string) =>{
    return authClient.get(getCartellaSocialeAmministrativaRoute(id))
}

export const getCartellaSocialeStoria = (id:string) =>{
    return authClient.get(getCartellaSocialeStoriaRoute(id))
}

export const getCartellaSocialeSanitaria = (id:string) =>{
    return authClient.get(getCartellaSocialeSanitariaRoute(id))
}

export const getCartellaSocialeSocialita = (id:string) =>{
    return authClient.get(getCartellaSocialeSocialitaRoute(id))
}

export const getCartellaSocialeCompetenze = (id:string) =>{
    return authClient.get(getCartellaSocialeCompetenzeRoute(id))
}

export const getCartellaSocialeLavoro = (id:string) =>{
    return authClient.get(getCartellaSocialeLavoroRoute(id))
}

export const getCartellaSocialeIstruzione = (id:string) =>{
    return authClient.get(getCartellaSocialeIstruzioneRoute(id))
}

export const getCartellaSocialePenale = (id:string) =>{
    return authClient.get(getCartellaSocialePenaleRoute(id))
}

export const getCartellaSocialeDesideri = (id:string) =>{
    return authClient.get(getCartellaSocialeDesideriRoute(id))
}
