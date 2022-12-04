import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaDesideriRoute = (id:string) => createRoute(`/api/desideris/${id}`)

export const modificaDesideri = (id:string,values:any) => {
    return authClient.patch(modificaDesideriRoute(id),values)
}
