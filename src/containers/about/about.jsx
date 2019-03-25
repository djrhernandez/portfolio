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
												Born in Delano, raised in Bakersfield, and traveled frequently to Los Angeles
												to visit my father on the weekends. My brother and I often enjoyed visiting him
												because our mother liked to dress us up in identical clothes. Even our haircuts were the same.
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
												Moved to Salem in 2010 where I attended Willamette University to play collegiate football,
												and graduated in 2014 with my first bachelors degree in Economics. I stayed up in Oregon
												a year after to evaluate my future career path and enjoy the wonders of the Pacific Northwest.
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
											I moved back to California a year later, and discovered a bigger passion for computer science.
											So I attended CSUB, received my 2nd bachelors degree, and moved to Los Angeles to seek personal
											growth and opportunity. I'm still actively looking for my career so something tells me that this should be exciting...
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
