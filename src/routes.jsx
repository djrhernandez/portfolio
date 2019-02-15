import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
//import Home from './containers/Home/Home';
import App from 'App';
//import Projects from './containers/Projects/Projects'
//import Aboutme from './containers/Aboutme/Aboutme'


export default (
    <Router history = { hashHistory }>
        <Route path = '/' component= { App }>
            <IndexRoute component= { Profile }/>
            <Route path = '/projects' component = { Projects }/>
            <Route path = '/profile' component = { Profile }/>
        </Route>
    </Router>
);
