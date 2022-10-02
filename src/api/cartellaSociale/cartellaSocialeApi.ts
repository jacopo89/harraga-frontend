import authClient from "../authClient";

const getCartellaSocialeRoute = "/api/cartella_sociales"
const postCartellaSocialeRoute = "/api/cartella_sociales"

export const getCartelleSociali = () => {
    return authClient.get(getCartellaSocialeRoute)
}

export const postCartellaSociale = (values:any) => {
    return authClient.post(postCartellaSocialeRoute,values)
}
