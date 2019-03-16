import React, { Component } from 'react'
import { Cards } from './projects.style.js'
import att from '../images/attitunes-logo.png'
import mmc from '../images/MMC.png'
import csu from '../images/csub.png'
/*import eqp from '../images/projectect.jpg'*/

class projects extends Component {
	render() {
		return (
			<React.Fragment>
				<Cards>
					<section className='project' id='project'>
						<div className='container py-5'>
							<h2 className='text-center'>projects</h2>
							<hr className='code-dark'/>
							<div className='row'>
								<div className='col-md-6 col-lg-4'>
									<a className='project-item' href='#project-modal-1'>
										<div className='project-item-caption'>
											<div className='project-item-caption-content'>
												<i className='material-icons'>zoom_in</i>
											</div>
										</div>
										<div className='image'>
											<img className='img-fluid' src={att} alt='Attitunes'/>
										</div>
									</a>
								</div>
								<div className='col-md-6 col-lg-4'>
									<a className='project-item' href='#project-modal-2'>
										<div className='project-item-caption'>
											<div className='project-item-caption-content'>
												<i className='material-icons'>zoom_in</i>
											</div>
										</div>
										<div className='image'>
											<div className='mercy'>
											<img className='img-fluid' src={mmc} alt='Mercy Medical Clinic'/>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-6 col-lg-4'>
									<a className='project-item' href='#project-modal-3'>
										<div className='project-item-caption'>
											<div className='project-item-caption-content'>
												<i className='material-icons'>zoom_in</i>
											</div>
										</div>
										<div className='image'>
											<div className='csub'>
												<img className='img-fluid' src={csu} alt='CSUBCS Website'/>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
					{/*<!-- project modals -->*/}
					<div className='project-modal mfp-hide' id='project-modal-1'>
						<div className='project-modal-dialog'>
							<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
								<i className='material-icons'>close</i>
							</a>
							<div className='container text-center'>
								<div className='row'>
									<div className='col-lg-8 mx-auto'>
										<h2 className='text-center'>Attitunes</h2>
										<h3 className='text-secondary my-4'>An Emotion-Based Music Player</h3>
										<hr className='music-dark mb-5'></hr>
										<img className='img-fluid mb-5' src={att} alt='Attitunes'/>
										<p className='text mb-5'>
											A desktop & mobile software application that plays music
											based on a user’s facial emotions using Microsoft Cognitive Services API.
											Implemented a KNN algorithm under a strict pair programming regiment
											to weigh facial emotions with predetermined song values.
										</p>
										<p className='text mb-5'>
											Languages Used: C#, Java, Microsoft Azure
										</p>
										<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close projectect</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='project-modal mfp-hide' id='project-modal-2'>
						<div className='project-modal-dialog'>
							<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
								<i className='material-icons'>close</i>
							</a>
							<div className='container text-center'>
								<div className='row'>
									<div className='col-lg-8 mx-auto'>
										<h2 className='text-center'>Mercy Medical Clinic</h2>
										<h3 className='text-secondary my-4'>A Clinical DBMS</h3>
										<hr className='doc-dark mb-5'></hr>
										<img className='img-fluid mb-5' src={mmc} alt='Mercy'/>
										<p className='text mb-5'>
											A clinical database management system in SQL
											that allows CRUD operations to a remote server for employees
											and patients through a responsive graphical user interface.
										</p>
										<p className='text mb-5'>
											Languages Used: PHP, JQuery, AJAX, XML
										</p>
										<p className='text mb-5'>
											Frameworks: Bootstrap 3, React.js
										</p>
										<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close projectect</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='project-modal mfp-hide' id='project-modal-3'>
						<div className='project-modal-dialog'>
							<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
								<i className='material-icons'>close</i>
							</a>
							<div className='container text-center'>
								<div className='row'>
									<div className='col-lg-8 mx-auto'>
										<h2 className='text-center'>CSUB C.S. Website</h2>
										<h3 className='text-secondary my-4'>A Responsive Side projectect</h3>
										<hr className='device-dark mb-5'></hr>
										<img className='img-fluid mb-5' src={csu} alt='CSUB'/>
										<p className='text mb-5'>
											This side projectect was intended to redesign the Computer Science department’s main website,
											focusing on more easily accessible and responsive features for desktops, tablets, and mobile devices.
										</p>
										<p className='text mb-5'>
											Languages Used: HTML/CSS, JavaScript
										</p>
										<p className='text mb-5'>
											Frameworks: Bootstrap
										</p>
										<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close projectect</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Cards>
			</React.Fragment>
		)
	}
}
export default projects;
/*
<Cards>
	<div className='card-deck'>
		<div className='card'>
			<div className='card-header'>
				<a data-toggle='collapse' href='att'>Attitunes</a>
			</div>
			<div className='card-body'>
				<img className='img-fluid' src={att} alt='Attitunes'/>
			</div>
		</div>

		<div className='card'>
			<div className='card-header'>
				<a data-toggle='collapse' href='mercy'>Mercy Medical Clinic</a>
			</div>
			<div className='card-body'>
				<img className='img-fluid' src={mmc}  alt='MMC'/>
			</div>
		</div>

		<div className='card'>
			<div className='card-header'>
				<a data-toggle='collapse' href='comp'>CSUB C.S. Website</a>
			</div>
			<div className='card-body'>
				<img className='img-fluid' src={csu} alt='CSUB'/>
			</div>
			<div id='comp' className="card-collapse collapse">
				<div className="card-body">asdfasdf</div>
			</div>
		</div>
	</div>
</Cards>
*/
