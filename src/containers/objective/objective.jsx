import React, { Component } from 'react';
import { colors } from '../../themes/variables';

class Objective extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<p>
					A computer science graduate is seeking advancement
					as a Software Developer or Engineer within the growing
					field of information technology. Offering extensive
					knowledge of frontend and backend software design,
					development and testing of software applications,
					and deployment and support using agile development
					methodologies.
					</p>
				</div>
			</React.Fragment>
		)
	}
}
export default Objective;
