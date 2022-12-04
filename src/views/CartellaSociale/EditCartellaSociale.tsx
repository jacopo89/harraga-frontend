import {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router";
import {
    editAmministrativaRoute,
    editAnagraficaRoute,
    editCompetenzeRoute,
    editDesideriRoute,
    editIstruzioneRoute,
    editLavoroRoute,
    editPenaleRoute,
    editSanitariaRoute,
    editSocialitaRoute,
    editStoriaRoute
} from "../../routes/frontend-routes";
import {useParams} from "react-router-dom";
import useGetPermission from "../../permissions/useGetPermissions";


export default function ({content = <div></div>}:any){
    const [value, setValue] = useState(0);
    const {id} = useParams()
    const navigate = useNavigate()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const {canReadAmministrativa, canReadStoria, canReadAnagrafica, canReadCompetenze, canReadLavoro, canReadDesideri, canReadIstruzione, canReadPenale, canReadSanitaria, canReadSocialita} = useGetPermission();

    return<>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {canReadAnagrafica && <Tab label="Anagrafica" onClick={() => navigate(editAnagraficaRoute(id))}/>}
            {canReadAmministrativa && <Tab label="Amministrativa" onClick={() => navigate(editAmministrativaRoute(id))}/>}
            {canReadStoria && <Tab label="Storia" onClick={() => navigate(editStoriaRoute(id))}/>}
            {canReadSanitaria && <Tab label="Sanitaria" onClick={() => navigate(editSanitariaRoute(id))}/>}
            {canReadIstruzione && <Tab label="Istruzione" onClick={() => navigate(editIstruzioneRoute(id))}/>}
            {canReadLavoro && <Tab label="Lavoro" onClick={() => navigate(editLavoroRoute(id))}/>}
            {canReadSocialita && <Tab label="Socialità" onClick={() => navigate(editSocialitaRoute(id))}/>}
            {canReadCompetenze && <Tab label="Competenze" onClick={() => navigate(editCompetenzeRoute(id))}/>}
            {canReadDesideri && <Tab label="Desideri" onClick={() => navigate(editDesideriRoute(id))}/>}
            {canReadPenale && <Tab label="Penale" onClick={() => navigate(editPenaleRoute(id))}/>}
        </Tabs>
        </Box>
        {content}
    </>
}
