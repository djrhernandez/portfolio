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
							<div className='edu-item row'>
								<div className='col-sm-4 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={csub} alt='CSUB'/>
									</div>
								</div>
								<div className='col-sm-8 m-auto'>
									<div className='text'>
										<a href="https://www.cs.csub.edu">California State University</a>
										<p className='place'>Bakersfield, CA</p>
										<div className='subtext'>
											<p>B.S. in Computer Science</p>
										</div>
									</div>
								</div>
							</div>

							<div className='edu-item row'>
								<div className='col-sm-4 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={will} alt='Willamette'/>
									</div>
								</div>
								<div className='col-sm-8 m-auto'>
									<div className='text'>
										<a href="https://www.willamette.edu">Willamette University</a>
										<p className='place'>Salem, OR</p>
										<div className='subtext'>
											<p>B.A. in Economics</p>
											<p>Minor in Psychology</p>
										</div>
									</div>
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
/*
<section className='education' id='education'>
	<div className='container py-5'>
		<h2 className='text-center'>Education</h2>
		<hr className='school-light'/>
		<div className='row'>
			<div className='school-item col-12'>
				<div className='image'>
					<img className='img-fluid' src={csub} alt='CSUB'/>
				</div>
				<div className='text'>
					<li><a href="https://www.cs.csub.edu">California State University</a></li>
					<li>Bakersfield, CA</li>
					<p className='subtext'>
						<li>B.S. in Computer Science, GPA: 3.28</li>
					</p>
				</div>
				<div className='date'>
					<li className='range'>
						<i className={this.icons}>date_range</i>
						<p className='date-text'>August 2015 - May 2018</p>
					</li>
				</div>
			</div>

			<div className='school-item col-12'>
				<div className='image col-2'>

					<img className='img-fluid my-auto p-3' src={will} alt='Willamette'/>
				</div>
				<div className='text col-6'>
					<li><a href="https://www.willamette.edu">Willamette University</a></li>
					<li>Salem, OR</li>
					<p className='subtext'>
						<li>B.A. in Economics</li>
						<li>Minor in Psychology</li>
						<li>Focus in Behavioral Economics</li>
					</p>

				</div>
				<div className='date col-4'>
					<li className='range'>
					<i className={this.icons}>date_range</i>
					<p className='date-text'>August 2010 - May 2014</p>
					</li>
				</div>
			</div>
		</div>
	</div>
</section>

*/
