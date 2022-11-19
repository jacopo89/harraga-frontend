import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaAmministrativaRoute = (id:string) => createRoute(`/api/amministrativas/${id}`)

export const modificaAmministrativa = (id:string,values:any) => {
    return authClient.patch(modificaAmministrativaRoute(id),values)
}
