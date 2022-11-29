import React from "react";
import TextFilterField, {TextFilterElementInterface} from "./fields/TextFilterField";
import CheckboxFilterField, {CheckboxFilterElementInterface} from "./fields/CheckboxFilterField";
import RadioFilterField, {RadioFilterElementInterface} from "./fields/RadioFilterField";

export type GenericFormElementInterface = TextFilterElementInterface | CheckboxFilterElementInterface | RadioFilterElementInterface

export default function FilterElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFilterField {...props}/>
        case "checkbox":
            return <CheckboxFilterField {...props} />
        case "radio":
            return <RadioFilterField {...props} />
    }
    return <></>
}
