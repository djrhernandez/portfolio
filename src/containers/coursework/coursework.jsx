import React, { Component } from 'react'
import { Courses } from './coursework.style.js'
//import Panel from './panel'

class Coursework extends Component {
	render() {
		return (
			<React.Fragment>
				<Courses>
					<section className='coursework' id='coursework'>
						<div className='container-fluid px-3 py-5'>
							<h2 className='text-center'>Related Coursework</h2>
							<hr className='subject-light'/>
							<div className="row">
								<div id="accordion" className="col-12 col-sm-6 mx-auto" role="tablist" aria-multiselectable="true">
									{/* Web Development */}
									<div className="card">
										<div className="card-header" role="tab" id="header1">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse1" aria-expanded="false" aria-controls="collapse1">
												<i className="material-icons">keyboard_arrow_left</i>
												Web Development
											</a>
										</div>
										<div id="collapse1" className='collapse' role="tabpanel" aria-labelledby="header1">
											<div className="card-body">
												<ul>
													<li>Server Side Programming in PHP</li>
													<li>User-Based/E-Commerce Website Design</li>
													<li>WebDev Security Risks/Assessments</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Database Systems */}
									<div className="card">
										<div className="card-header" role="tab" id="header2">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse2" aria-expanded="false" aria-controls="collapse2">
												<i className="material-icons">keyboard_arrow_left</i>
												Database Systems
											</a>
										</div>
										<div id="collapse2" className='collapse' role="tabpanel" aria-labelledby="header2">
											<div className="card-body">
												<ul>
													<li>Conceptual and Logical Database Design</li>
													<li>Relational Database Theory</li>
													<li>Database Management Systems</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Software Engineering */}
									<div className="card">
										<div className="card-header" role="tab" id="header3">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse3" aria-expanded="false" aria-controls="collapse3">
												<i className="material-icons">keyboard_arrow_left</i>
												Software Engineering
											</a>
										</div>
										<div id="collapse3" className='collapse' role="tabpanel" aria-labelledby="header3">
											<div className="card-body">
												<ul>
													<li>Software Development Life Cycles</li>
													<li>MVC Architecture, Design Patterns</li>
													<li>Software/Unit Testing, Quality Assurance</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Artificial Intelligence */}
									<div className="card">
										<div className="card-header" role="tab" id="header4">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse4" aria-expanded="false" aria-controls="collapse4">
												<i className="material-icons">keyboard_arrow_left</i>
												Artificial Intelligence
											</a>
										</div>
										<div id="collapse4" className='collapse' role="tabpanel" aria-labelledby="header4">
											<div className="card-body">
												<ul>
													<li>Knowledge/Rule-Based Expert Systems</li>
													<li>Fuzzy Logic & Inference</li>
													<li>Artificial Neural (Multilayered) Networks</li>
													<li>Evolutionary Strategies, Genetic Algorithms</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div id="accordion" className="col-12 col-sm-6 mx-auto" role="tablist" aria-multiselectable="true">
									{/* Computer Graphics */}
									<div className="card">
										<div className="card-header" role="tab" id="header5">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse5" aria-expanded="false" aria-controls="collapse5">
												<i className="material-icons">keyboard_arrow_left</i>
												Computer Graphics
											</a>
										</div>
										<div id="collapse5" className='collapse' role="tabpanel" aria-labelledby="header5">
											<div className="card-body">
												<ul>
													<li>Graphics APIs, Hardware & Pipelines</li>
													<li>Ray Tracing, Surface Shading, Texture Mapping</li>
													<li>2D/3D Projection, Animation, Lighting</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Dist./Parallel Computation */}
									<div className="card">
										<div className="card-header" role="tab" id="header6">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse6" aria-expanded="false" aria-controls="collapse6">
												<i className="material-icons">keyboard_arrow_left</i>
												Distributed & Parallel Computation
											</a>
										</div>
										<div id="collapse6" className='collapse' role="tabpanel" aria-labelledby="header6">
											<div className="card-body">
												<ul>
													<li>Remote Invocation, Indirect/Interprocess Communication</li>
													<li>Coordination & Agreement Protocols in P2P Systems</li>
													<li>Transactions & Concurrency Control</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Digital Forensics */}
									<div className="card">
										<div className="card-header" role="tab" id="header7">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse7" aria-expanded="false" aria-controls="collapse7">
												<i className="material-icons">keyboard_arrow_left</i>
												Digital Forensics
											</a>
										</div>
										<div id="collapse7" className='collapse' role="tabpanel" aria-labelledby="header7">
											<div className="card-body">
												<ul>
													<li>Intrusion Detection & Prevention Systems</li>
													<li>Investigative Techniques using Forensic Tools</li>
													<li>Digital Crime Reconstruction</li>
												</ul>
											</div>
										</div>
									</div>

									{/* Advanced Networks & Computer Security */}
									<div className="card">
										<div className="card-header" role="tab" id="header8">
											<a className="card-link collapsed" data-parent="#accordion" data-toggle="collapse"
												href="#collapse8" aria-expanded="false" aria-controls="collapse8">
												<i className="material-icons">keyboard_arrow_left</i>
												Advanced Networks & Computer Security
											</a>
										</div>
										<div id="collapse8" className='collapse' role="tabpanel" aria-labelledby="header8">
											<div className="card-body">
												<ul>
													<li>System/Network Security, Cryptography</li>
													<li>Analysis of Security Vulnerabilities/Issues</li>
													<li>Hands-On Experience with Securing Systems in Kali Linux</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</section>
				</Courses>
			</React.Fragment>
		)
	}
}
export default Coursework;

/*


<div className="card col-12 col-sm-5 col-lg-5">
	<div className="card-header">
		<div className='card-title'>Digital Forensics</div>
	</div>
	<div className="card-body d-table">
		<div className="card-text">
			<ul>

			</ul>
		</div>
	</div>
</div>

<div className="card col-12 col-sm-5 col-lg-5">
	<div className="card-header">
		<div className='card-title'>Advanced Networks & Computer Security</div>
	</div>
	<div className="card-body d-table">
		<div className="card-text">
			<ul>

			</ul>
		</div>
	</div>
</div>
*/
