import React from "react";
import './App.css';
import SessionGlobal from './components/SesionGlobal';
import google from './img/google.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FromUser from "./components/FromUser"
import Registrar from "./components/Registro";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <Router>
      <header>
        <h1 className="titulo">Block de Notas</h1>
      </header>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <SessionGlobal logo={google} />
            <FromUser />
          </Route>
          <Route path="/login">
            <Registrar />
          </Route>
          <Route path="/home">
            <CreateNote />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;