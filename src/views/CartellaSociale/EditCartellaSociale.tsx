import {useEffect, useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {a11yProps, TabPanel} from "../../components/TabPanel";
import AnagraficaForm from "./SubForms/AnagraficaForm";
import AmministrativaForm from "./SubForms/AmministrativaForm";
import StoriaForm from "./SubForms/StoriaForm";
import SanitariaForm from "./SubForms/SanitariaForm";
import SocialitaForm from "./SubForms/SocialitaForm";
import CompetenzeForm from "./SubForms/CompetenzeForm";
import {useNavigate} from "react-router";
import {
    editAmministrativaRoute,
    editAnagraficaRoute, editCompetenzeRoute, editLavoroRoute,
    editSanitariaRoute, editSocialitaRoute,
    editStoriaRoute
} from "../../routes/frontend-routes";
import {useParams} from "react-router-dom";


export default function ({content = <div></div>}:any){
    const [value, setValue] = useState(0);
    const {id} = useParams()
    const navigate = useNavigate()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return<>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Anagrafica" onClick={() => navigate(editAnagraficaRoute(id)) } />
            <Tab label="Amministrativa" onClick={() => navigate(editAmministrativaRoute(id)) } />
            <Tab label="Storia" onClick={() => navigate(editStoriaRoute(id)) } />
            <Tab label="Sanitaria" onClick={() => navigate(editSanitariaRoute(id)) } />
            <Tab label="Istruzione" {...a11yProps(4)} />
            <Tab label="Lavoro" onClick={() => navigate(editLavoroRoute(id)) } />
            <Tab label="Socialità" onClick={() => navigate(editSocialitaRoute(id)) } />
            <Tab label="Competenze" onClick={() => navigate(editCompetenzeRoute(id)) } />
            <Tab label="Desideri" {...a11yProps(8)} />
            <Tab label="Penale" {...a11yProps(9)} />
        </Tabs>
        </Box>
        {content}
        {/*<TabPanel value={value} index={0}>
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
        <TabPanel value={value} index={6}>
            {value === 6 && <SocialitaForm/>}
        </TabPanel>
        <TabPanel value={value} index={7}>
            {value === 7 && <CompetenzeForm/>}
        </TabPanel>*/}
    </>
}
