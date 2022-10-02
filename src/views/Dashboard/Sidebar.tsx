import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import List from "@mui/material/List";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useNavigate} from "react-router";
import {listaCartelleSociali} from "../../routes/frontend-routes";

export default function Sidebar(toggleDrawer:any){

    const navigate = useNavigate()

    return <React.Fragment><Toolbar
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
        }}
    >
        <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
        </IconButton>
    </Toolbar>
        <List component="nav">
            <ListItemButton  onClick={()=>navigate(listaCartelleSociali)}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </List>

    </React.Fragment>
}
