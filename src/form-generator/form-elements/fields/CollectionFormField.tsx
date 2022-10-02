import {Button} from "react-bootstrap";
import React from "react";
import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";

export interface CollectionElementInterface extends BasicFormElementInterface{
    type:"collection",
    formElements: FormElements,
    nestedForm: JSX.Element
}

export default function CollectionFormField(props:CollectionElementInterface){


    return <div></div>
}
