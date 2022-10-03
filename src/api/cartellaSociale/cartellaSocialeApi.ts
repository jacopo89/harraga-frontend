import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const getCartellaSocialeRoute = createRoute("/api/cartella_sociales")
const postCartellaSocialeRoute = createRoute("/api/cartella_sociales")

export const getCartelleSociali = () => {
    return authClient.get(getCartellaSocialeRoute)
}

export const postCartellaSociale = (values:any) => {
    return authClient.post(postCartellaSocialeRoute,values)
}
