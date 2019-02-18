import React, { Component } from 'react';
import { ResumeContainer, Headline } from './Resume.style';
import { Container, Grid, Section } from '../../themes/grid';
import Objective from '../../containers/objective/objective';
import Education from '../../containers/education/education';
import Coursework from '../../containers/coursework/coursework';
import Projects from '../../containers/projects';
class Resume extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<React.Fragment>
				<Grid>
					<Section>
						<Headline><i className='material-icons'>star</i><li>Objective:</li></Headline>
						<Objective/>
						<Headline><i className='material-icons'>school</i><li>Education</li></Headline>
						<Education/>
						<Headline><i className='material-icons'>subject</i><li>Related Coursework</li></Headline>
						<Coursework/>
					</Section>

					<Section>
						<Headline><i className='material-icons'>code</i><li>Projects</li></Headline>
						<Projects/>
					</Section>

					<Section>
						<Headline><i className='material-icons'>work</i><li>Work Experience</li></Headline>
					</Section>

					<Section>
						<Headline><i className='material-icons'>whatshot</i><li>Other Interests:</li></Headline>
					</Section>
				</Grid>
			</React.Fragment>
		)
	}
}
export default Resume;

/*
	<Resume>
		<Section>
			<Objective/>
			<Education>
				<EducationItem/>
				<EducationItem/>
			</Education>
			<Skills></Skills>
			<Coursework></Coursework>
		</Section>

		<Section>
			<Projects>
			</Projects>
		</Section>

		<Section>
			<Work></Work>
		</Section>

		<Section>
			<Interests></Interests>
		</Section>

	</Resume>
*/
