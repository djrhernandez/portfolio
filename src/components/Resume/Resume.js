import React, { Component } from 'react'
import { Section } from './Resume.style'
import About from '../../containers/about/about'
import Skills from '../../containers/skills/skills'
import Projects from '../../containers/projects/projects'
import Education from '../../containers/education/education'
import Coursework from '../../containers/coursework/coursework'
import Experience from '../../containers/experience/experience'
import Interests from '../../containers/interests/interests'

class Resume extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Section>
					<About/>
					<Skills/>
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
