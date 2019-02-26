import React, { Component } from 'react';
import { Text } from './objective.style.js';
import { Content } from '../../themes/grid';

class Objective extends Component {
	render() {
		return (
			<React.Fragment>
				<Content>
					<Text>
						A computer science graduate is seeking advancement
						as a Software Developer or Engineer within the growing
						field of information technology. Offering extensive
						knowledge of frontend and backend software design,
						development and testing of software applications,
						and deployment and support using agile development
						methodologies.
					</Text>
				</Content>
			</React.Fragment>
		)
	}
}
export default Objective;
