import {Option} from "../form-elements/fields/SelectFormField";

export type FilterType  = "text" | "number" | "select" | "radio" | "checkbox" | "file" | "wysiwyg" | "tags" | "collection" | "embedded" | "date" | "countries"

export default interface FilterInterface{
    Header:string,
    accessor: string,
    type:FilterType,
}

export interface TextFilterInterface extends FilterInterface{
    type:"text",
}

export interface CheckboxFilterInterface extends FilterInterface{
    type:"checkbox",
}

export interface RadioFilterInterface extends FilterInterface{
    type:"radio",
    options:Option[]
}

export interface TextFilterInterface extends FilterInterface{
    type:"text",
}

export interface CountriesFilterInterface extends FilterInterface{
    type:"countries",
}

export interface SelectFilterInterface extends FilterInterface{
    type:"select",
    options:Option[]
}

export interface WYSIWYGFilterInterface extends FilterInterface{
    type:"wysiwyg",
}

export interface TagsFilterInterface extends FilterInterface{
    type:"tags",
}

export interface NumberFilterInterface extends FilterInterface{
    type:"number",
}

export interface DateFilterInterface extends FilterInterface{
    type:"date",
}
export interface CollectionFilterInterface extends FilterInterface{
    type:"collection",
    formElements:FilterElements,
    initialValues: object,
}

export interface EmbeddedFilterInterface extends FilterInterface{
    type:"embedded",
    formElements:FilterElements,
    initialValues: object,
}
export interface FileFilterInterface extends FilterInterface{
    type:"file"
}



export type GenericFilterInterface = TextFilterInterface | SelectFilterInterface | CheckboxFilterInterface | RadioFilterInterface | WYSIWYGFilterInterface | TagsFilterInterface|NumberFilterInterface | CollectionFilterInterface | EmbeddedFilterInterface | FileFilterInterface | DateFilterInterface | CountriesFilterInterface
export type FilterElements = GenericFilterInterface[]
