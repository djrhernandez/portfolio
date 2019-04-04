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
							<div className='row'>
								<div className='image col-3'>
									<img className='img-fluid' src={bb} alt='Best Buy'/>
								</div>
								<div className='text col-6 px-auto py-3'>
									<div>
										<a href="https://www.bestbuy.com">Best Buy, Inc.</a>
										<li className='location'>Bakersfield, CA</li>
									</div>
									<li className='pb-3'>Mobile Sales Consultant</li>
									<p className='subtext'>
										<li>
											Improved mobile sales revenue and store profits
											by 5% each fiscal quarter by providing exceptional
											expertise about the latest technology,
											pricing plans, and service features within the
											telecommunication industry, while cultivating a
											more personalized experience for each customer.
										</li>
									</p>
								</div>
								<div className='date col-3'>
									<i className={this.icons}>date_range</i>
									<li className='range my-3'>July 2017 - April 2018</li>
								</div>
							</div>

							<div className='row'>
								<div className='image col-3'>
									<img className='img-fluid' src={sway} alt='Safeway'/>
								</div>
								<div className='text col-6 px-auto py-3'>
									<div>
										<a href="https://www.safeway.com">Safeway, Inc.</a>
										<li className='location'>Salem, OR</li>
									</div>
									<li className='pb-3'>Food Clerk/Stocker</li>
									<p className='subtext'>
										<li>
											Operated an electronic scanning cash register
											to process various forms of payment.
										</li>
										<li>
											Assisted in balancing cash drawers, unloading
											deliveries, running inventory scans, stocking
											shelves, and handling emergencies and customer
											complaints.
										</li>
									</p>
								</div>
								<div className='date col-3'>
									<i className={this.icons}>date_range</i>
									<li className='range my-3'>June 2014 - April 2015</li>
								</div>
							</div>

							<div className='row'>
								<div className='image col-3'>
									<img className='img-fluid' src={will} alt='Willamette'/>
								</div>
								<div className='text col-6 px-auto py-3'>
									<div>
										<a href="https://www.safeway.com">Willamete University</a>
										<li className='location'>Salem, OR</li>
									</div>
									<li className='pb-3'>Campus Safety Dispatcher</li>
									<p className='subtext'>
										<li>
											Compiled statistics and recorded descriptions
											of events and emergencies for incident reports.
										</li>
										<li>
											Relayed work orders, messages, and information
											to and from campus safety officers, supervisors,
											and university facilities.
										</li>
										<li>
											Interacted with customers or supervising
											personnel in order to address questions and
											answer problems.
										</li>
									</p>
								</div>
								<div className='date col-3'>
									<i className={this.icons}>date_range</i>
									<li className='range my-3'>August 2013 - May 2014</li>
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
/*
<Sector>
<div className='position'>
<img className='img-fluid' src={will} alt='Willamette'/>
<div className='title'><b><a href="https://www.willamette.edu">Willamette University</a></b></div>
<div className='subtitle'>Campus Safety Dispatcher</div>
</div>
<div className='date'>
<div><i className={this.icons}>date_range</i></div>
<div><li>August 2013 - May 2014</li></div>
</div>
<div className='text'>
<li>
Compiled statistics and recorded descriptions
of events and emergencies for incident reports.
</li>
<li>
Relayed work orders, messages, and information
to and from campus safety officers, supervisors,
and university facilities.
</li>
<li>
Interacted with customers or supervising
personnel in order to address questions and
answer problems.
</li>
</div>
</Sector>

<div className='work-item row'>
	<div className='col-sm-3 m-auto'>
		<div className='image'>
			<img className='img-fluid' src={bb} alt='Best Buy'/>
		</div>
	</div>
	<div className='col-sm-9 m-auto'>
		<div className='text'>
			<a href="https://www.bestbuy.com">Best Buy, Inc.</a>
			<li className='position'>Mobile Sales Consultant</li>
			<p className='place'>Bakersfield, CA</p>
			<li className='date'>
				<i className={this.icons}>date_range</i>
				<li className='range'>July 2017 - April 2018</li>
			</li>
		</div>
		<p className='subtext'>
			<li>
				Improved mobile sales revenue and store profits
				by 5% each fiscal quarter by providing exceptional
				expertise about the latest technology,
				pricing plans, and service features within the
				telecommunication industry, while cultivating a
				more personalized experience for each customer.
			</li>
		</p>
	</div>
	<div className='date col-3'>

	</div>
</div>
*/
