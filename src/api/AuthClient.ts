import axios from "axios";
import {
    getAccessorElementsNoIndex,
    getNestedFormElement,
    getNestedValue
} from "../form-generator/form-elements/utils/form-generator-utils";
import {ElementType, FormElements} from "../form-generator/ElementInterface";

const config = {headers:{ 'Content-Type': 'application/json' }}
const patchConfigDefault = {headers:{ 'Content-Type': 'application/merge-patch+json' }}

// @ts-ignore
const finalConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : config
// @ts-ignore
const patchConfig = localStorage.getItem('token') ? {headers:{ 'Content-Type': 'application/merge-patch+json',  'Authorization': `Bearer ${localStorage.getItem('token').slice(1,-1)}` }} : patchConfigDefault

type Filter = {
    name:string,
    value: any,
    type: ElementType
}
type Filters = Filter[]

const addQueryParams= (url:string, filters:Filters =[]):string =>{
    if(filters.length === 0) return url;

    let newUrl = `${url}?`;
    filters.forEach(filter => {
        if(filter.value!==null && filter.value!==undefined && filter.value!=="") {
            if(filter.type === "checkbox"){
                newUrl = newUrl.concat(`${filter.name}=${filter.value}&`)
            }else{
                newUrl = newUrl.concat(`${filter.name}=${filter.value}&`)
            }
        }
    })
    return newUrl;
}


const getObjectKeys = (object:object ):string[] =>{
    if(Object.entries(object).length ===0) return [];
    const keys:string[] = [];
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

const get = (url:string, filters?:Filters) => {
    return axios.get(addQueryParams(url, filters),finalConfig)
}
const post = (url:string,data:any) => axios.post(url,data,finalConfig)
const put = (url:string,data:any) => axios.put(url,data,finalConfig)
const patch = (url:string,data:any) => axios.patch(url,data,patchConfig)
const cancel = (url:string) =>axios.delete(url,finalConfig)



export const buildFiltersFromValues =(object:object,formElelements:FormElements):Filters =>{
    const keys = getObjectKeys(object);
    const filters = keys.map(key =>{
        const formElement = getNestedFormElement(getAccessorElementsNoIndex(key),formElelements)
        if(formElement){
            return {
                name:key,
                value: getNestedValue(key, object),
                type: formElement?.type
            }
        }

        throw new Error()
    })

    return filters;

}

export default {
    get,
    post,
    put,
    patch,
    "delete":cancel
}
