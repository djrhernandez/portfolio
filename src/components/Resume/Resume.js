import React, { Component } from 'react';
import { Headline } from './Resume.style';
import { Grid, Section } from '../../themes/grid';
import Objective from '../../containers/objective/objective';
import Education from '../../containers/education/education';
import Coursework from '../../containers/coursework/coursework';
import Projects from '../../containers/projects/projects';
import Experience from '../../containers/experience/experience';
import Interests from '../../containers/interests/interests';

class Resume extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Grid>
					<Section>
						<Headline>
							<i className={this.icons}>star</i>
							<li>Objective:</li>
						</Headline>
						<Objective/>
					</Section>

					<Section>
						<Headline>
							<i className={this.icons}>school</i>
							<li>Education</li>
						</Headline>
						<Education/>
					</Section>

					<Section>
						<Headline>
							<i className={this.icons}>subject</i>
							<li>Related Coursework</li>
						</Headline>
						<Coursework/>
					</Section>

					<Section>
						<Headline>
							<i className={this.icons}>code</i>
							<li>Projects</li>
						</Headline>
						<Projects/>
					</Section>

					<Section>
						<Headline>
							<i className={this.icons}>work</i>
							<li>Work Experience</li>
						</Headline>
						<Experience/>
					</Section>

					<Section>
						<Headline>
							<i className={this.icons}>whatshot</i>
							<li>Other Interests:</li>
						</Headline>
						<Interests/>
					</Section>
				</Grid>
			</React.Fragment>
		)
	}
}
export default Resume;
