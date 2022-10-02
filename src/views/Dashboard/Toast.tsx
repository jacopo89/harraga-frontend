import React from 'react'
import {Button} from "@mui/material";
import {toast} from "react-toastify";

export default function (){
    const notify = () => toast("Wow so easy!");
    return <Button onClick={notify}>CLICCA</Button>
}
