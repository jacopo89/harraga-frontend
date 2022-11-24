import * as Yup from "yup";
import {FormElements} from "../../../form-generator/ElementInterface";

export const desideriFormElements:FormElements = [
    {
        Header: 'Aspirazioni professionali',
        accessor: 'aspirazioni',
        type: "wysiwyg",
    },
    {
        Header: 'Ascolto del minore/progetto individuale',
        accessor: 'ascoltoMinore',
        type: "wysiwyg",
    },
]


export const desideriInitialValues = {
    ascoltoMinore:null,
    aspirazioni:null
};

export const desideriValidationSchema = Yup.object().shape({
});


