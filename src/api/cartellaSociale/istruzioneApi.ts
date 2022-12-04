import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaIstruzioneRoute = (id:string) => createRoute(`/api/istruziones/${id}`)

export const modificaIstruzione = (id:string,values:any) => {
    return authClient.patch(modificaIstruzioneRoute(id),values)
}
