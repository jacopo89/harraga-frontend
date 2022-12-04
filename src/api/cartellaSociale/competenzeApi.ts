import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const modificaCompetenzeRoute = (id:string) => createRoute(`/api/competenzes/${id}`)

export const modificaCompetenze = (id:string,values:any) => {
    return authClient.patch(modificaCompetenzeRoute(id),values)
}
