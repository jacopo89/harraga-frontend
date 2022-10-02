import axios from "axios";

const config = {headers:{ 'Content-Type': 'application/json' }}

const finalConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : config
const patchConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/merge-patch+json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : config

const get = (url) => axios.get(url,finalConfig)
const post = (url,data) => axios.post(url,data,finalConfig)
const put = (url,data) => axios.put(url,data,finalConfig)
const patch = (url,data) => axios.patch(url,data,patchConfig)
const cancel = (url) =>axios.delete(url,finalConfig)

export default {
    get,
    post,
    put,
    patch,
    "delete":cancel
}
