import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaSocialitaRoute = (id:string) => createRoute(`/api/socialitas/${id}`)

export const modificaSocialita = (id:string,values:any) => {
    return authClient.patch(modificaSocialitaRoute(id),values)
}
