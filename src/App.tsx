import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from "./views/Authentication/Signin";
import SignUp from "./views/Authentication/SignUp";
import TabellaCartelleSociali from "./views/CartellaSociale/TabellaCartelleSociali";
import {editCartellaSocialeRouterElement, nuovaCartellaSocialeRoute} from "./routes/frontend-routes";
import NuovaCartellaSociale from "./views/CartellaSociale/NuovaCartellaSociale";
import 'react-toastify/dist/ReactToastify.css';
import './css/bootstrap.min.css'
import './css/dropzone.css'
import EditCartellaSociale from "./views/CartellaSociale/EditCartellaSociale";
import {ToastContainer} from "react-toastify";
function App() {
  //const tokenValid = authProvider.checkTokenValidity();

  const authenticatedRoutes = <Routes>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>

    <Route path="/" element={<Dashboard content={<TabellaCartelleSociali/>}/>}/>
    <Route path={editCartellaSocialeRouterElement}  element={<Dashboard content={<EditCartellaSociale/>}/>}/>
    <Route path={nuovaCartellaSocialeRoute} element={<Dashboard content={<NuovaCartellaSociale/>}/>}/>

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
      {true ? authenticatedRoutes : routes}
    </BrowserRouter>
  </Provider>
}

export default App;