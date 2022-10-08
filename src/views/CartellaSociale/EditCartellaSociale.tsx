import {getCartellaSocialeAnagrafica} from "../../api/cartellaSociale/cartellaSocialeApi";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {modificaAnagrafica} from "../../api/cartellaSociale/anagraficaApi";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {a11yProps, TabPanel} from "../../components/TabPanel";
import AnagraficaForm from "./SubForms/AnagraficaForm";


export default function (){
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return<>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Anagrafica" {...a11yProps(0)} />
            <Tab label="Altro" {...a11yProps(1)} />
            <Tab label="Altraltro" {...a11yProps(2)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            {value === 0 && <AnagraficaForm></AnagraficaForm>}
        </TabPanel>
        <TabPanel value={value} index={1}>
            {value === 1 && "Item two"}
        </TabPanel>
        <TabPanel value={value} index={2}>
            {value === 2 && "Item three"}
        </TabPanel>
    </>
}
