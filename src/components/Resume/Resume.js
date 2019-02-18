import React, { Component } from 'react';
import { ResumeContainer } from './Resume.style';

class Resume extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<React.Fragment>
				<ResumeContainer>

					Resume Coming Soon...
				</ResumeContainer>
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
