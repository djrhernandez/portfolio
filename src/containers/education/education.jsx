import React, { Component } from 'react'
import csub from '../images/csub-logo.png'
import will from '../images/willamette-logo.png'
import { Sector } from './education.style.js'

class Education extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Sector>
					<section className='education' id='education'>
						<div className='container py-5'>
							<h2 className='text-center'>Education</h2>
							<hr className='school-light'/>
							<div className='row'>
								<div className='image col-2'>
									<img className='img-fluid' src={csub} alt='CSUB'/>
								</div>
								<div className='text col-7 px-auto py-3'>
									<li><a href="https://www.cs.csub.edu">California State University</a></li>
									<li>Bakersfield, CA</li>
									<p className='subtext'>B.S. in Computer Science, GPA: 3.28</p>
								</div>
								<div className='date col-3'>
									<i className={this.icons}>date_range</i>
									<li className='range my-3'>August 2015 - May 2018</li>
								</div>
							</div>

							<div className='row'>
								<div className='image col-2'>
									{/* Logo needs p-3 to keep same size as csub logo */}
									<img className='img-fluid my-auto p-3' src={will} alt='Willamette'/>
								</div>
								<div className='text col-7 px-auto py-3'>
									<li><a href="https://www.willamette.edu">Willamette University</a></li>
									<li>Salem, OR</li>
									<p className='subtext'>B.A. in Economics, Minor in Psychology</p>
									<p className='subtext'>Focus in Behavioral Economics</p>
								</div>
								<div className='date col-3'>
									<i className={this.icons}>date_range</i>
									<li className='range my-3'>August 2010 - May 2014</li>
								</div>
							</div>
						</div>
					</section>
				</Sector>
			</React.Fragment>
		)
	}
}
export default Education;
