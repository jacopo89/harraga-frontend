import authClient from "../authClient";
import {createRoute} from "../../routes/routeHelper";

const uploadCSVRoute = createRoute(`/api/upload_csv`)

interface CSVFilePayload{
    "csvFile": string,
}

export const uploadCSV = (values:CSVFilePayload) => {
    return authClient.post(uploadCSVRoute,values)
}
