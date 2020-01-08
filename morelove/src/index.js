import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Perfil from './pg_perfil_e/perfil_e';
import Usuario from './pg_usuario/usuario';
import Vitrine from './pg_usuario/vitrine';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/perfil_e' component={Perfil} />
            <Route exact path='/vitrine' component={Vitrine} />
            <Route exact path='/usuario' component={Usuario} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
 

