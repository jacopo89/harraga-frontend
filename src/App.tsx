import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from "./views/Authentication/Signin";
import SignUp from "./views/Authentication/SignUp";
import TabellaCartelleSociali from "./views/CartellaSociale/TabellaCartelleSociali";
import {
  amministrativaRouterElement,
  anagraficaRouterElement, competenzeRouterElement,
  dettaglioUtente,
  editCartellaSocialeRouterElement,
  gestioneUtenti, lavoroRouterElement,
  nuovaCartellaSocialeRoute, sanitariaRouterElement, socialitaRouterElement, storiaRouterElement
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
function App() {
  const tokenValid = authProvider.checkTokenValidity();

  const authenticatedRoutes = <Routes>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/registrazione" element={<SignUp/>}/>
    <Route path="/" element={<Dashboard content={<TabellaCartelleSociali/>}/>}/>
    <Route path={anagraficaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<AnagraficaForm/>} />}/>}/>
    <Route path={amministrativaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<AmministrativaForm/>} />}/>}/>
    <Route path={socialitaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<SocialitaForm/>} />}/>}/>
    <Route path={sanitariaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<SanitariaForm/>} />}/>}/>
    <Route path={storiaRouterElement} element={<Dashboard content={<EditCartellaSociale content={<StoriaForm/>} />}/>}/>
    <Route path={competenzeRouterElement} element={<Dashboard content={<EditCartellaSociale content={<CompetenzeForm/>} />}/>}/>
    <Route path={lavoroRouterElement} element={<Dashboard content={<EditCartellaSociale content={<LavoroForm/>} />}/>}/>

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
