import React, { Component } from 'react'
import bb from '../images/bestbuy-logo.png'
import owc from '../images/owc-logo.png'
import hulu from '../images/hulu-logo.png'
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
							<hr className='work-dark' />

							<div className='work-item row'>
								<div className='logo col-sm-3 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={owc} alt='Other World Computing'/>
									</div>
								</div>

								<div className='col-sm-9 m-auto'>
									<div className='text'>
										<p className='position'>Software Engineer / <a href="https://www.owc.com">Other World Computing</a></p>
										<div className='info'>
											<p className='place'>Burbank, CA</p>
											<p className='date'>October 2022 - Present</p>
											<i className={this.icons}>date_range</i>
										</div>
									</div>
								</div>

								<div className='m-auto'>
									<div className='subtext'>
										<ul>
											<li>
												Works with multiple computer systems (towers, server racks, etc.) that provide users with media
												video workflow integrations such as Active Directory, Frame.io, Kyno, and Postlab.
											</li>
											<li>
												Builds full-stack software that is used to partition memory or mount volumes for servers and data
												storage units so celebrities and other production companies can streamline their workflows
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='work-item row'>
								<div className='logo col-sm-3 m-auto'>
									<div className='image'>
										<img className='img-fluid' src={hulu} alt='Hulu'/>
									</div>
								</div>

								<div className='col-sm-9 m-auto'>
									<div className='text'>
										<p className='position'>Multiple Positions / <a href="https://www.hulu.com">Hulu</a></p>
										<div className='info'>
											<p className='place'>Santa Monica, CA</p>
											<p className='date'>April 2019 - May 2022</p>
											<i className={this.icons}>date_range</i>
										</div>
									</div>
								</div>

								<div className='m-auto'>
									<div className='subtext'>
										<p>Senior Software Engineer</p>
										<ul>
											<li>
												Designed scalable tool-agnostic frameworks that fetched, stored, standardized, and
												supplied vast amounts of data to various environments to present accurate and reliable
												information in an timely, automated fashion.
											</li>
											<li>
												Designed multiple backend applications in Ruby for a responsive internal website, allowing
												hundreds of stakeholders to readily observe, analyze, and report quantifiable metrics pertaining
												to incident management, infrastructure costs, service dependencies, cascading service failures,
												and other complex workflows within company operations in real-time.
											</li>
											<li>
												Built a backend monitoring application in Ruby that enabled a holistic view of system and network
												stability across the company. The application would aggregate information from multiple sources to
												automatically detect which and how often services interact with each other, infer their dependencies
												and relationships, and inform stakeholders about the current state of systems.
											</li>
											<li>
												Developed other backend features that bolster performance for various data storage, transformation,
												and transfer capabilities. Features included Redis caching for immediate data availability, integration
												with AWS products such as S3, RDS, and SQS for data storage and ingestion, Sidekiq workers for
												asynchronous background processing, and automated tooling for onboarded service teams using platforms
												such as Rundeck.
											</li>
											<li>
												Built complex CI/CD tooling using E2E automation leveraging tools such as Git, Jenkins, Spinnaker,
												Artifactory, Terraform and Kubernetes to implement, manage, and configure resource provisioning for the
												application deployment pipeline. Improvements to the pipeline resulted in a 15% decrease for infrastructure
												costs and AWS provisioning.
											</li>
										</ul>
									</div>

									<div className='subtext'>
										<p>Operational Reliability & Automation Engineer</p>
										<ul>
											<li>
												Designed solutions that provided reliable automated systems focused on scalability, availability, and efficiency
												across all company operations. Visualized processes that teams used to help qualify and quantify improvements to
												their workflows. Tied the health of their team into the health of the organization as a whole.
											</li>
											<li>
												Constructed a robust API under a GraphQL layer to integrate RESTful web services with front-end backbone code and
												provide internal tooling the ability to pull data from multiple sources. The API utilized background processing jobs
												via Sidekiq to perform tasks, such as concurrent viewership of key linear events (i.e. Superbowl, Fashion week) or
												incident response notifications, and provide highly accessible data on demand.
											</li>
											<li>
												Constructed self-service Slack automation that supported general and on-call support through the use of YAML files.
												These Slack bots were developed to reduce excess operational work and improve the reliability of systems so teams can
												be more efficient with their daily operations. As a result, the applications cultivated a cohesive and standardized
												system of communication between stakeholders, allowing teams to dictate the processing of their workflows and improve
												their incident metrics by 50% once they were onboarded.
											</li>
										</ul>
									</div>

									<div className='subtext'>
										<p>Network Operations Center (NOC) Incident Manager</p>
										<ul>
											<li>
												Marshaled internal teams to mitigate and restore critical network, application, and system incidents that severely impact
												stakeholders to the company. Corroborated disaster recovery plans to triage and analyze outages within the organization’s
												infrastructure.
											</li>
											<li>
												Improved the accuracy, efficiency, and reliability of network traffic and software deployment monitoring to automated
												intelligent detection systems, resulting in an increase of incident-free time by 5.21% in a six-month period.
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='work-item row others'>
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

							<div className='work-item row others'>
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

							<div className='work-item row others'>
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
