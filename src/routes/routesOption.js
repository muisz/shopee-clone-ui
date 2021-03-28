import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from '../views/home';

export default [
    {
        path: '/',
        is_exact: true,
        component: Home
    },
    // {
    //     path: '',
    //     is_exact: false,
    //     component: ''
    // }
]