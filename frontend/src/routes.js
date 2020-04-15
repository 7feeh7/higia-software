import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}