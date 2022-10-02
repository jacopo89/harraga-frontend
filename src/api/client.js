import axios from "axios";

const config = {headers:{ 'Content-Type': 'application/json' }}

const get = (url) => axios.get(url,config)
const post = (url,data) => axios.post(url,data,config)
const put = (url,data) => axios.put(url,data,config)
const cancel = (url) =>axios.delete(url,config)

export default {
    get,
    post,
    put,
    "delete":cancel
}
