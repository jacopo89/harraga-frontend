import React from "react";
import TextFilterField, {TextFilterElementInterface} from "./fields/TextFilterField";
import CheckboxFilterField, {CheckboxFilterElementInterface} from "./fields/CheckboxFilterField";
import RadioFilterField, {RadioFilterElementInterface} from "./fields/RadioFilterField";
import SelectFilterField, {SelectFilterElementInterface} from "./fields/SelectFilterField";
import CountriesFilterField, {CountriesFilterElementInterface} from "./fields/CountriesFilterField";

export type GenericFormElementInterface = TextFilterElementInterface | CheckboxFilterElementInterface | RadioFilterElementInterface | SelectFilterElementInterface | CountriesFilterElementInterface

export default function FilterElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFilterField {...props}/>
        case "checkbox":
            return <CheckboxFilterField {...props} />
        case "radio":
            return <RadioFilterField {...props} />
        case "select":
            return <SelectFilterField {...props} />
        case "countries":
            return <CountriesFilterField {...props} />
    }
    return <></>
}
