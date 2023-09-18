import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import SocialMedia from './components/SocialMedia/SocialMedia'
import { Wrapper } from './themes/grid'
import './App.css'

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
			<React.Fragment>
            	<div className="App container-fluid">
					<Wrapper>
						<Navigation/>
						<Header/>
						<Resume/>
						<SocialMedia/>
						<div className='scroll-to-top d-lg-none position-fixed'>
							<a className='js-scroll-trigger d-block' href='#page-top'>
								<i className='material-icons'>expand_less</i>
							</a>
						</div>
					</Wrapper>
            	</div>
			</React.Fragment>
        );
    }
}
export default App;
