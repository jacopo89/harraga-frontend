import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaSanitariaRoute = (id:string) => createRoute(`/api/sanitarias/${id}`)

export const modificaSanitaria = (id:string,values:any) => {
    return authClient.patch(modificaSanitariaRoute(id),values)
}
