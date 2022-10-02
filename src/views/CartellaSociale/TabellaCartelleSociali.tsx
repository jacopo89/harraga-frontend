import { Button } from "@mui/material";
import {useNavigate} from "react-router";
import {nuovaCartellaSocialeRoute} from "../../routes/frontend-routes";

export default function TabellaCartelleSociali(){
    const navigate = useNavigate();
    return <div>
        <Button onClick={()=>{navigate(nuovaCartellaSocialeRoute)}}>Crea</Button>
    </div>
}
