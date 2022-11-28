import axios from "axios";
import {getNestedValue} from "../form-generator/form-elements/utils/form-generator-utils";

const config = {headers:{ 'Content-Type': 'application/json' }}
const patchConfigDefault = {headers:{ 'Content-Type': 'application/merge-patch+json' }}

const finalConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : config
const patchConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/merge-patch+json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : patchConfigDefault

const get = (url, filters={}) => {
    return axios.get(addQueryParams(url, filters),finalConfig)
}
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
const addQueryParams= (url,queryParamsObject) =>{
    if(Object.entries(queryParamsObject).length ===0) return url;

    let newUrl = `${url}?`;

    getObjectKeys(queryParamsObject).forEach(key => {
        const value = getNestedValue(key,queryParamsObject)
        if(value!==null && value!==undefined && value!=="") {

            newUrl = newUrl.concat(`${key}=${value}&`)
        }
    })
    return newUrl;
}

const getObjectKeys = (object ) =>{
    if(Object.entries(object).length ===0) return [];
    const keys = [];
    Object.entries(object).forEach(([key,value])=>{
        if(value === null || value === undefined || value === ""){
            keys.push(key)
        }else if(typeof value === "object"){
            const nestedObjKeys = getObjectKeys(value);
            nestedObjKeys.forEach(nestedKey => keys.push(`${key}.${nestedKey}`))
        }else{
            keys.push(key)
        }

    })
    return keys;
}
