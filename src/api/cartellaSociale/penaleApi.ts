import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaPenaleRoute = (id:string) => createRoute(`/api/penales/${id}`)

export const modificaPenale = (id:string,values:any) => {
    return authClient.patch(modificaPenaleRoute(id),values)
}
