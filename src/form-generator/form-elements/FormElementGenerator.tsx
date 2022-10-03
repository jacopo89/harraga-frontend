import SelectFormField, {SelectFormElementInterface} from "./fields/SelectFormField";
import React from "react";
import TextFormField, {TextElementInterface} from "./fields/TextFormField";
import RadioFormField, {RadioFormElementInterface} from "./fields/RadioFormField";
import CheckboxFormField, {CheckboxFormElementInterface} from "./fields/CheckboxFormField";
import WYSIWYGFormField, {WYSIWYGElementInterface} from "./fields/WYSIWYGFormField";
import TagsFormField, {TagsElementInterface} from "./fields/TagsFormField";
import NumberFormField, {NumberElementInterface} from "./fields/NumberFormField";
import CollectionFormField, {CollectionElementInterface} from "./fields/CollectionFormField";
import EmbeddedFormField, {EmbeddedElementInterface} from "./fields/EmbeddedFormField";
import FileFormField, {FileFormElementInterface} from "./fields/FileFormField";
import DateFormField, {DateElementInterface} from "./fields/DateFormField";

export type GenericFormElementInterface = TextElementInterface | SelectFormElementInterface | RadioFormElementInterface | CheckboxFormElementInterface |WYSIWYGElementInterface | TagsElementInterface|NumberElementInterface | CollectionElementInterface | EmbeddedElementInterface | FileFormElementInterface | DateElementInterface

export default function FormElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFormField {...props}/>
        case "select":
            return <SelectFormField  {...props}/>
        case "checkbox":
            return <CheckboxFormField  {...props}/>
        case "radio":
            return <RadioFormField  {...props}/>
        case "wysiwyg":{
            return <WYSIWYGFormField {...props}/>
        }
        case "tags":{
            return <TagsFormField {...props}/>
        }
        case "number":{
            return <NumberFormField {...props}/>
        }
        case "collection":{
            return <CollectionFormField {...props} />
        }
        case "embedded":{
            return <EmbeddedFormField {...props} />
        }
        case "file":{
            return <FileFormField {...props} />
        }
        case "date":{
            return <DateFormField {...props}/>
        }
    }
    return <></>
}
