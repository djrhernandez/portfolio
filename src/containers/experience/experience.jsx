import React, { Component } from 'react'
import bb from '../images/bestbuy-logo.png'
import will from '../images/willamette-logo.png'
import sway from '../images/safeway-logo.png'
import { Work } from './experience.style.js'

class Experience extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Work>
					<section className='work' id='work'>
						<div className='container py-5'>
							<h2 className='text-center'>Work Experience</h2>
							<hr className='work-light'/>
							<div className='work-item row'>
								<div className='logo col-sm-3 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={bb} alt='Best Buy'/>
									</div>
								</div>
								<div className='col-sm-9 m-auto'>
									<div className='text'>
										<p className='position'>Mobile Sales Consultant / <a href="https://www.bestbuy.com">Best Buy, Inc.</a></p>
										<div className='info'>
											<p className='place'>Bakersfield, CA</p>
											<p className='date'>July 2017 - April 2018</p>
											<i className={this.icons}>date_range</i>
										</div>
									</div>
									<div className='subtext'>
										<ul>
											<li>
												Improved mobile sales revenue and store profits
												by 5% each fiscal quarter by providing exceptional
												expertise about the latest technology,
												pricing plans, and service features within the
												telecommunication industry, while cultivating a
												more personalized experience for each customer.
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='work-item row'>
								<div className='logo col-sm-3 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={sway} alt='Safeway'/>
									</div>
								</div>
								<div className='col-sm-9 m-auto'>
									<div className='text'>
										<p className='position'>Food Stocker / <a href="https://www.safeway.com">Safeway, Inc.</a></p>
										<div className='info'>
											<p className='place'>Salem, OR</p>
											<p className='date'>June 2014 - April 2015</p>
											<i className={this.icons}>date_range</i>
										</div>
									</div>
									<div className='subtext'>
										<ul>
											<li>
												Processed various forms of payment and transaction using cash registers.
											</li>
											<li>
												Assisted in balancing cash drawers, unloading
												deliveries, running inventory scans, stocking
												shelves, and handling emergencies and customer
												complaints.
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='work-item row'>
								<div className='logo col-sm-3 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={will} alt='Willamette'/>
									</div>
								</div>
								<div className='col-sm-9 m-auto'>
									<div className='text'>
										<p className='position'>Campus Safety Dispatcher / <a href="https://www.willamette.edu">Willamette University</a></p>
										<div className='info'>
											<p className='place'>Salem, OR</p>
											<p className='date'>August 2013 - May 2014</p>
											<i className={this.icons}>date_range</i>
										</div>
									</div>
									<div className='subtext'>
										<ul>
											<li>
												Performed emergency medical dispatch and crisis intervention services.
											</li>
											<li>
												Consolidated statistics, descriptions of events and/or emergencies, and other pertinent
												information to accurately input incident reports into various dispatching programs.
											</li>
											<li>
												Routed orders, messages, and insight to campus safety personnel and callers involved in
												emergency and non-emergency services.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Work>
			</React.Fragment>
		)
	}
}
export default Experience;
