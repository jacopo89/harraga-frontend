import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {a11yProps, TabPanel} from "../../components/TabPanel";
import AnagraficaForm from "./SubForms/AnagraficaForm";
import AmministrativaForm from "./SubForms/AmministrativaForm";
import StoriaForm from "./SubForms/StoriaForm";
import SanitariaForm from "./SubForms/SanitariaForm";


export default function (){
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return<>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Anagrafica" {...a11yProps(0)} />
            <Tab label="Amministrativa" {...a11yProps(1)} />
            <Tab label="Storia" {...a11yProps(2)} />
            <Tab label="Sanitaria" {...a11yProps(3)} />
            <Tab label="Istruzione" {...a11yProps(4)} />
            <Tab label="Lavoro" {...a11yProps(5)} />
            <Tab label="Socialità" {...a11yProps(6)} />
            <Tab label="Competenze" {...a11yProps(7)} />
            <Tab label="Desideri" {...a11yProps(8)} />
            <Tab label="Penale" {...a11yProps(9)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            {value === 0 && <AnagraficaForm/>}
        </TabPanel>
        <TabPanel value={value} index={1}>
            {value === 1 && <AmministrativaForm/>}
        </TabPanel>
        <TabPanel value={value} index={2}>
            {value === 2 && <StoriaForm/>}
        </TabPanel>
        <TabPanel value={value} index={3}>
            {value === 3 && <SanitariaForm/>}
        </TabPanel>
    </>
}
