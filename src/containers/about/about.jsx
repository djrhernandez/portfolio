import React, { Component } from 'react';
import { Objective } from './about.style.js';

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Objective>
					<section className='about' id='about'>
						<div className='container py-5'>
							<h2 className='text-center'>About</h2>
							<hr className='obj-dark'/>
							<p className='text'>
								A computer science graduate is seeking advancement
								as a Software Developer or Engineer within the growing
								field of information technology. Offering extensive
								knowledge of frontend and backend software design,
								development and testing of software applications,
								and deployment and support using agile development
								methodologies.
							</p>
						</div>
					</section>
				</Objective>
			</React.Fragment>
		)
	}
}
export default About;
