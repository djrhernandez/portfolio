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
												Graduated with a Bachelors in Economics at Willamette University (Salem, OR) in 2014.
												Played collegiate football and joined the Sigma Chi Fraternity during my tenure. I also
												spent a year in Salem to evaluate my career path and enjoy the wonders of the Pacific Northwest.
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
											Moved back to Bakersfield, CA in 2015 to earn another bachelors at CSUB in computer science, then to
											Los Angeles where I worked at Hulu for 3 years as a NOC Incident Manager and Senior Software Engineer.
											I currently work as a Software Developer for Other World Computing.
										</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Objective>
			</React.Fragment>
		)
	}
}
export default About;
