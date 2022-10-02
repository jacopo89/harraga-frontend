import {Option} from "./form-elements/fields/SelectFormField";
type ElementType  = "text" | "number" | "select" | "radio" | "checkbox" | "file" | "wysiwyg" | "tags" | "collection" | "embedded"

export default interface ElementInterface{
    Header:string,
    accessor: string,
    type:ElementType,
}

export interface TextElementInterface extends ElementInterface{
    type:"text",
}

export interface CheckboxElementInterface extends ElementInterface{
    type:"checkbox",
}

export interface RadioElementInterface extends ElementInterface{
    type:"radio",
    options:Option[]
}

export interface TextElementInterface extends ElementInterface{
    type:"text",
}

export interface SelectElementInterface extends ElementInterface{
    type:"select",
    options:Option[]
}

export interface WYSIWYGElementInterface extends ElementInterface{
    type:"wysiwyg",
}

export interface TagsElementInterface extends ElementInterface{
    type:"tags",
}

export interface NumberElementInterface extends ElementInterface{
    type:"number",
}

export interface CollectionElementInterface extends ElementInterface{
    type:"collection",
    formElements:FormElements

}

export interface EmbeddedElementInterface extends ElementInterface{
    type:"embedded",
    formElements:FormElements,

}

export type GenericElementInterface = TextElementInterface | SelectElementInterface | CheckboxElementInterface | RadioElementInterface | WYSIWYGElementInterface | TagsElementInterface|NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface
export type FormElements = GenericElementInterface[]
