import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesOption from './routesOption';
import Routes from './routesOption';

export default function(props){
    return(
        <BrowserRouter>
            <Switch>
                {Routes.map((route, key) => {
                    return(
                        <Route key={key} path={route.path} exact={route.is_exact} component={route.component}  />
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
}