import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Vitrine from './pg_vitrine/vitrine';
import Perfil from './pg_perfil_e/perfil_e';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/vitrine' component={Vitrine} />
            <Route exact path='/perfil_e' component={Perfil} />
            <Route exact path='/App' component={App} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
 

