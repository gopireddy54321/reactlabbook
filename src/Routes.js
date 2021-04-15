import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetReqByIdComponent from './Components/GetReqByIdComponent';
import GetReqComponent from './Components/GetReqComponent';
import LandingComponent from './Components/LandingComponent';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={LandingComponent} exact />
            <Route path='/login' component={LoginComponent}/>       
            <Route path={`/register`} component={RegisterComponent} />
            <Route path={`/userlist`} component={GetReqComponent} />
            <Route path={`/customerbyId/:id`} component={GetReqByIdComponent} />
            
        </Switch>
    </BrowserRouter>
);
 
export default Routes;