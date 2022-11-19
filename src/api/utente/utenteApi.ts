import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const getUtentiRoute = createRoute("/api/utentes")

export const getUtenti = () => {
    return authClient.get(getUtentiRoute)
}
