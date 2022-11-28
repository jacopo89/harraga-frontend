import React from "react";
import TextFilterField, {TextFilterElementInterface} from "./fields/TextFilterField";

export type GenericFormElementInterface = TextFilterElementInterface

export default function FilterElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFilterField {...props}/>

    }
    return <></>
}
