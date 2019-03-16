import React, { Component } from 'react';
import { About, Text } from './objective.style.js';

class Objective extends Component {
	render() {
		return (
			<React.Fragment>
				<About>
					<section className='about' id='about'>
						<div className='container py-5'>
							<h2 className='text-center'>About</h2>
							<hr className='obj-light'/>
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
				</About>
			</React.Fragment>
		)
	}
}
export default Objective;
/*

<Info>
	<Headline>
		<i className={this.icons}>school</i>
		<li>Education</li>
	</Headline>
	<Education/>

	<Headline>
		<i className={this.icons}>subject</i>
		<li>Related Coursework</li>
	</Headline>
	<Coursework/>

	<Headline>
		<i className={this.icons}>work</i>
		<li>Work Experience</li>
	</Headline>
	<Experience/>

	<Headline>
		<i className={this.icons}>whatshot</i>
		<li>Other Interests:</li>
	</Headline>
	<Interests/>
</Info>

*/
