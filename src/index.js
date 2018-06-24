import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import NotFound from './components/NotFound';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
 