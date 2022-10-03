import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const getCartellaSocialeRoute = createRoute("/api/anagraficas")
const modificaAnagraficaRoute = (id:string) => createRoute(`/api/anagraficas/${id}`)

export const getCartelleSociali = () => {
    return authClient.get(getCartellaSocialeRoute)
}

export const modificaAnagrafica = (id:string,values:any) => {
    return authClient.patch(modificaAnagraficaRoute(id),values)
}
