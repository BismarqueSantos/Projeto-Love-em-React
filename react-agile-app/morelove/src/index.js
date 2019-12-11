import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import perfilUsuario from './components/perfil_usuario';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/perfil_usuario' component={perfilUsuario} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));


