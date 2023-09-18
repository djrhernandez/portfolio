import React from 'react'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'
//import { Router, hashHistory as history } from 'react-router'
//import routes from './routes'
import { createRoot } from 'react-dom/client';

// Using new root API to provide better ergonomics for managing roots.
// Also enables the new concurrent renderer, which allows you to opt-into concurrent features.
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
