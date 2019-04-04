import React, { Component } from 'react'
import { Objective } from './about.style.js'
import cali from '../images/portfolio/california.png'
import oregon from '../images/portfolio/oregon.png'
import lax from '../images/portfolio/la-silhouette.png'

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<Objective>
					<section className='about' id='about'>
						<div className='container py-5'>
							<h2 className='text-center'>About Me</h2>
							<hr className='obj-dark'/>
							<div className='row'>
								<div className='col-state col-12 col-sm-6'>
									<div className='image'>
										<img className='cal img-fluid' src={cali} alt='California'/>
									</div>
									<div className='col-text'>
										<div className='text'>
											<p>
												Born and raised in Bakersfield, my brother and I often enjoyed visiting our father in Los Angeles
												because our mother liked to dress us up in identical clothes and even the same haircut style.
											</p>
										</div>
									</div>
									<div className='col-shadow'/>
								</div>

								<div className='col-state col-12 col-sm-6'>
									<div className='image'>
										<img className='ore img-fluid' src={oregon} alt='Oregon'/>
									</div>
									<div className='col-text'>
										<div className='text'>
											<p>
												Moved to Salem in 2010 where I attended played collegiate football, and graduated
												with a bachelors degree in Economics at Willamette University. I stayed up in Oregon
												for a year to evaluate my career path and enjoy the wonders of the Pacific Northwest.
											</p>
										</div>
									</div>
									<div className='col-shadow'/>
								</div>
								<div className='col-state col-12 col-sm-10 mx-auto'>
									<div className='image'>
										<img className='lax img-fluid' src={lax} alt='Los Angeles'/>
									</div>
									<div className='col-text'>
										<div className='text'>
										<p>
											I moved back to California in 2015 and discovered a bigger passion for computer science.
											So I earned my 2nd bachelors degree at CSUB and moved to the City of Angels to seek personal
											growth and opportunity. I'm still actively looking for my career and I'm excited for what the future holds.
										</p>
										</div>
									</div>
								</div>
								{/*<div className='col-state col-12'>
									<img className='col-ca' src={cali} alt='California'/>
									<div className='col-text'>
										<p className='text'>
										Offering extensive knowledge of frontend and backend software design,
										development and testing of software applications,
										and deployment and support using agile development
										methodologies.
										</p>
									</div>
								</div>
								*/}
							</div>
						</div>
					</section>
				</Objective>
			</React.Fragment>
		)
	}
}
export default About;
