import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Resume from './components/Resume/Resume';
import SocialMedia from './components/SocialMedia/SocialMedia';
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
			<React.Fragment>
            	<div className = "App">
					<wrapper>
						<Sidebar/>
						<content>
							<Resume/>
							<SocialMedia/>
						</content>
					</wrapper>
            	</div>
			</React.Fragment>
        );
    }
}
export default App;
/*
<App>
	<Wrapper>
		<Sidebar>
			<Profile>
				<Thumbnail/>
				<ContactInfo/>
			</Profile>

			<Skillbar></Skillbar>
		</Sidebar>

		<Resume>
			<WorkExp></WorkExp>

			<Education></Education>

			<Projects></Projects>
		</Resume>

		<Footer>
			<SocialMedia>
			</SocialMedia>
		</Footer>
	</Wrapper>
</App>

*/
