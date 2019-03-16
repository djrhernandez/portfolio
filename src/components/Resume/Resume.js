import React, { Component } from 'react'
import { Section } from './Resume.style'
import Objective from '../../containers/objective/objective'
import Education from '../../containers/education/education'
import Coursework from '../../containers/coursework/coursework'
import Projects from '../../containers/projects/projects'
import Experience from '../../containers/experience/experience'
import Interests from '../../containers/interests/interests'

class Resume extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Section>
					<Objective/>
					<Projects/>
					<Education/>
					<Coursework/>
					<Experience/>
					<Interests/>
				</Section>

			</React.Fragment>
		)
	}
}
export default Resume;
