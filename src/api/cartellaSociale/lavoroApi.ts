import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaLavoroRoute = (id:string) => createRoute(`/api/lavoros/${id}`)

export const modificaLavoro = (id:string,values:any) => {
    return authClient.patch(modificaLavoroRoute(id),values)
}
