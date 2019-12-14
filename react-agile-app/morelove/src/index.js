import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Vitrine from './components/vitrine';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/App' component={App} />
            <Route exact path='/vitrine' component={Vitrine} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));


