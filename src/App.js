import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import SocialMedia from './components/SocialMedia/SocialMedia'
import { Wrapper } from './themes/layout'
import './styles/App.scss'

class App extends Component {
	constructor() {
		super();

		var today = new Date();
		var date = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

		this.state = {
			date: date
		}
	}

    render() {
        return (
			<div className='App'>
				<Wrapper>
					<Navigation/>
					<Header/>
					<Resume/>
					<SocialMedia/>
					<div className='scroll-to-top'>
						<a className='js-scroll-trigger' href='#page-top'>
							<i className='material-icons'>expand_less</i>
						</a>
					</div>
				</Wrapper>
			</div>
        );
    }
}
export default App;
