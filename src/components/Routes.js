import React from 'react'
import { Router ,Switch, Route } from "react-router"
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import {history} from '../history'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

const Routes= () =>(
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <PrivateRoute component={Home} exact path="/"/>
            <Route component={Register} exact path="/register"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes