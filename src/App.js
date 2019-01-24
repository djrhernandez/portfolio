import React, { Component } from 'react';
import Header from './containers/header/header';
import About from './containers/about/about';
import Resume from './containers/resume/resume';
import Projects from './containers/projects/projects';
import Contact from './containers/contact/contact';
import Footer from './containers/footer/footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		var today = new Date();
		var date = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}}`;

		this.state = {
			date: date
		}
	}

    render() {
        return (
            <div className="App">
				<header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}
export default App;
/*
<div className="App">
	<Header>
	<About>
	<Resume>
	<Projects>
	<Contact>
	<Footer>
</div>

*/
