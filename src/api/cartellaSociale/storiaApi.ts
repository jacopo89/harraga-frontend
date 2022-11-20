import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaStoriaRoute = (id:string) => createRoute(`/api/storias/${id}`)

export const modificaStoria = (id:string,values:any) => {
    return authClient.patch(modificaStoriaRoute(id),values)
}
