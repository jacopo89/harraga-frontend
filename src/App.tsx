import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from "./views/Authentication/Signin";
import SignUp from "./views/Authentication/SignUp";
import TabellaCartelleSocialiPage from "./views/CartellaSociale/TabellaCartelleSocialiPage";
import {
  amministrativaRouterElement,
  anagraficaRouterElement,
  competenzeRouterElement, desideriRouterElement,
  dettaglioUtente,
  gestioneUtenti,
  istruzioneRouterElement,
  lavoroRouterElement,
  nuovaCartellaSocialeRoute,
  penaleRouterElement,
  sanitariaRouterElement,
  socialitaRouterElement,
  storiaRouterElement
} from "./routes/frontend-routes";
import NuovaCartellaSociale from "./views/CartellaSociale/NuovaCartellaSociale";
import 'react-toastify/dist/ReactToastify.css';
import './css/bootstrap.min.css'
import './css/dropzone.css'
import EditCartellaSociale from "./views/CartellaSociale/EditCartellaSociale";
import {ToastContainer} from "react-toastify";
import TabellaUtenti from "./views/GestioneUtenti/TabellaUtenti";
import {authProvider} from "./helpers/authentication/authProvider";
import EditUtente from "./views/GestioneUtenti/EditUtente";
import AnagraficaForm from "./views/CartellaSociale/SubForms/AnagraficaForm";
import AmministrativaForm from './views/CartellaSociale/SubForms/AmministrativaForm';
import SocialitaForm from "./views/CartellaSociale/SubForms/SocialitaForm";
import SanitariaForm from "./views/CartellaSociale/SubForms/SanitariaForm";
import StoriaForm from "./views/CartellaSociale/SubForms/StoriaForm";
import CompetenzeForm from "./views/CartellaSociale/SubForms/CompetenzeForm";
import LavoroForm from "./views/CartellaSociale/SubForms/LavoroForm";
import IstruzioneForm from "./views/CartellaSociale/SubForms/IstruzioneForm";
import PenaleForm from "./views/CartellaSociale/SubForms/PenaleForm";
import DesideriForm from "./views/CartellaSociale/SubForms/DesideriForm";

function App() {
  const tokenValid = authProvider.checkTokenValidity();

  const authenticatedRoutes = <Routes>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/registrazione" element={<SignUp/>}/>
    <Route path="/" element={<Dashboard content={<TabellaCartelleSocialiPage/>}/>}/>
    <Route path={anagraficaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<AnagraficaForm/>} />}/>}/>
    <Route path={amministrativaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<AmministrativaForm/>} />}/>}/>
    <Route path={socialitaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<SocialitaForm/>} />}/>}/>
    <Route path={sanitariaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<SanitariaForm/>} />}/>}/>
    <Route path={storiaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<StoriaForm/>} />}/>}/>
    <Route path={competenzeRouterElement} element={<Dashboard content={<EditCartellaSociale content={<CompetenzeForm/>} />}/>}/>
    <Route path={lavoroRouterElement} element={<Dashboard content={<EditCartellaSociale content={<LavoroForm/>} />}/>}/>
    <Route path={istruzioneRouterElement} element={<Dashboard content={<EditCartellaSociale content={<IstruzioneForm/>} />}/>}/>
    <Route path={penaleRouterElement} element={<Dashboard content={<EditCartellaSociale content={<PenaleForm/>} />}/>}/>
    <Route path={desideriRouterElement} element={<Dashboard content={<EditCartellaSociale content={<DesideriForm/>} />}/>}/>

    <Route path={nuovaCartellaSocialeRoute} element={<Dashboard content={<NuovaCartellaSociale/>}/>}/>
    <Route path={gestioneUtenti} element={<Dashboard content={<TabellaUtenti/>}/>}/>
    <Route path={dettaglioUtente} element={<Dashboard content={<EditUtente/>}/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="*" element={<Navigate replace to="/signin"/>}/>
  </Routes>

  const routes = <Routes>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="*" element={<Navigate replace to="/signin"/>}
    />
  </Routes>

  return <Provider store={store}>
    <BrowserRouter>
      <ToastContainer/>
      {tokenValid ? authenticatedRoutes : routes}
    </BrowserRouter>
  </Provider>
}

export default App;
