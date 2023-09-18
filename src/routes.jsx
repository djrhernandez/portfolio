import React from 'react'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import App from 'App'
import Attitunes from 'components/Attitunes/Attitunes'
import Mercy from 'components/Mercy/Mercy'
import CSUBak from 'components/CSUBak/CSUBak'

/* WIP */
export default (
    <Route path = '/' component= { App }>
        <Route path = '/components/Attitunes' component = { Attitunes }/>
        <Route path = '/components/Mercy' component = { Mercy }/>
        <Route path = '/components/CSUBak' component = { CSUBak }/>
    </Route>
);
