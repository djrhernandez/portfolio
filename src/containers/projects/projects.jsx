import React, { Component } from 'react'
import { Cards } from './projects.style.js'
import att from '../images/projects/attitunes-logo.png'
import mmc from '../images/projects/MMC.png'
import csu from '../images/projects/csub.png'
import aproj1 from '../images/projects/attitunes/att-desktop-demo.png'
import aproj2 from '../images/projects/attitunes/att-desktop-results.png'
import aproj3 from '../images/projects/attitunes/att-desktop-demo2.png'
import aproj4 from '../images/projects/attitunes/att-mobile-demo.png'
import aproj5 from '../images/projects/attitunes/att-mobile-demo2.png'
import mproj from '../images/projects/mercy-medical-clinic.png'
import cproj from '../images/projects/csub-website-project.png'

class projects extends Component {
	render() {
		return (
			<React.Fragment>
				<Cards>
					<section className='project' id='project'>
						<div className='container py-5'>
							<h2 className='text-center'>projects</h2>
							<hr className='code-dark'/>
							<div className='row' id='inline-popups'>
								<div className='col-8 col-md-8 col-lg-5 col-xl-4 mx-auto mb-5'>
									<div className='card'>
										<div className='card-content'>
											<a className='project-item' href='#project-modal-1' data-effect='mfp-move-horizontal'>
												<div className='project-caption'>
													<div className='project-caption-content'>
														<i className='material-icons'>zoom_in</i>
													</div>
												</div>
											</a>
											<div className='image'>
												<img className='img-fluid' src={att} alt='Attitunes'/>
											</div>
										</div>
										<div className='card-footer project-text'>Attitunes</div>
									</div>
								</div>
								<div className='col-8 col-md-8 col-lg-5 col-xl-4 mx-auto mb-5'>
									<div className='card'>
										<div className='card-content'>
											<a className='project-item' href='#project-modal-2' data-effect='mfp-move-horizontal'>
												<div className='project-caption'>
													<div className='project-caption-content'>
														<i className='material-icons'>zoom_in</i>
													</div>
												</div>
											</a>
											<div className='image'>
												<img className='img-fluid' src={mmc} alt='Mercy Clinic'/>
											</div>
										</div>
										<div className='card-footer project-text'>Mercy Medical Clinic</div>
									</div>
								</div>
								<div className='col-8 col-md-8 col-lg-5 col-xl-4 mx-auto mb-5'>
									<div className='card'>
										<div className='card-content'>
											<a className='project-item' href='#project-modal-3' data-effect='mfp-move-horizontal'>
												<div className='project-caption'>
													<div className='project-caption-content'>
														<i className='material-icons'>zoom_in</i>
													</div>
												</div>
											</a>
											<div className='image'>
												<img className='img-fluid' src={csu} alt='CSUBCS Website'/>
											</div>
										</div>
										<div className='card-footer project-text'>CSUB C.S. Website</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- project modals -->*/}
						<div className='project-modal mfp-animated mfp-hide' id='project-modal-1'>
							<div className='project-modal-dialog'>
								<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
									<i className='material-icons'>close</i>
								</a>
								<div className='container-fluid'>
									<div className='project-modal-title'>
										<h2 className=''>Attitunes</h2>
										<h3 className='text-secondary my-2'>An Emotion-Based Music Player</h3>
										<hr className='music-dark mb-5'></hr>
									</div>
									<div className='project-modal-gallery'>
										<div id='carousel-list' className='carousel slide ml-auto mr-auto' data-ride='carousel' data-interval='false'>
											<ol className='carousel-indicators'>
												<li data-target='#carousel-list' data-slide-to='0' className='active'></li>
												<li data-target='#carousel-list' data-slide-to='1' className='active'></li>
												<li data-target='#carousel-list' data-slide-to='2' className='active'></li>
												<li data-target='#carousel-list' data-slide-to='3' className='active'></li>
												<li data-target='#carousel-list' data-slide-to='4' className='active'></li>
											</ol>
											<div className='carousel-inner'>
												<div className='carousel-item active'>
													<img className='img-fluid d-block' src={aproj1} alt='Attitunes Overview'/>
												</div>
												<div className='carousel-item'>
													<img className='img-fluid d-block' src={aproj2} alt='Attitunes Demo'/>
												</div>
												<div className='carousel-item'>
													<img className='img-fluid d-block' src={aproj3} alt='Attitunes Results'/>
												</div>
												<div className='carousel-item'>
													<img className='img-fluid d-block' src={aproj4} alt='Attitunes Mobile Demo 1'/>
												</div>
												<div className='carousel-item'>
													<img className='img-fluid d-block' src={aproj5} alt='Attitunes Mobile Demo 2'/>
												</div>
											</div>
											<a className='carousel-control-prev' href='#carousel-list' role='button' data-slide='prev'>
												<span className='carousel-control-prev-icon' aria-hidden='true'></span>
												<span className='sr-only'>Previous</span>
											</a>
											<a className='carousel-control-next' href='#carousel-list' role='button' data-slide='next'>
												<span className='carousel-control-next-icon' aria-hidden='true'></span>
												<span className='sr-only'>Next</span>
											</a>
										</div>
									</div>
									<div className='project-modal-text'>
										<p className='text'>
											A desktop & mobile software application that plays music
											based on a user’s facial emotions using Microsoft Cognitive Services API.
											Implemented a KNN algorithm under a strict pair programming regiment
											to weigh facial emotions with predetermined song values.
										</p>
										<p className='text'>
											<b>Languages:</b> C++/C#, Java
										</p>
										<p className='text'>
											<b>Frameworks:</b> Microsoft Azure Cognitive Services, AForge
										</p>
										<p className='text'>
											<b>Applications:</b> Android Studio, Visual Studio, Xamarin
										</p>
									</div>
									<div className='project-modal-btn'>
										<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close</a>
									</div>
								</div>
							</div>
						</div>
						<div className='project-modal mfp-animated mfp-hide' id='project-modal-2'>
							<div className='project-modal-dialog'>
								<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
									<i className='material-icons'>close</i>
								</a>
								<div className='container-fluid'>
									<div className='row'>
										<div className='col-lg-11 mx-auto'>
											<div className='project-modal-title'>
												<h2 className=''>Mercy Medical Clinic</h2>
												<h3 className='text-secondary my-3'>A Clinical DBMS</h3>
												<hr className='doc-dark mb-5'></hr>
												<img className='img-fluid mb-5' src={mproj} alt='Mercy'/>
											</div>
											<div className='project-modal-text'>
												<p className='text mb-3'>
													A clinical database management system in SQL
													that allows CRUD operations to a remote server for employees
													and patients through a responsive graphical user interface.
												</p>
												<p className='text mb-3'>
													<b>Languages:</b> PHP, jQuery, AJAX, XML, SQL
												</p>
												<p className='text mb-3'>
													<b>Frameworks:</b> Bootstrap 3, React.js
												</p>
												<p className='text mb-3'>
													<b>Applications:</b> Visual Studio, Notepad++, SQL Developer, Oracle
												</p>
											</div>
											<div className='project-modal-btn'>
												<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='project-modal mfp-animated mfp-hide' id='project-modal-3'>
							<div className='project-modal-dialog'>
								<a className='close-button d-none d-md-block project-modal-dismiss' href='#/'>
									<i className='material-icons'>close</i>
								</a>
								<div className='container-fluid'>
									<div className='row'>
										<div className='col-lg-11 mx-auto'>
											<div className='project-modal-title'>
												<h2 className=''>CSUB C.S. Website</h2>
												<h3 className='text-secondary my-3'>A Responsive Side Project</h3>
												<hr className='device-dark mb-5'></hr>
												<img className='img-fluid mb-5' src={cproj} alt='CSUB'/>
											</div>
											<div className='project-modal-text'>
												<p className='text mb-3'>
													This side project was intended to redesign the Computer Science department’s main website,
													focusing on more easily accessible and responsive features for desktops, tablets, and mobile devices.
												</p>
												<p className='text mb-3'>
													<b>Languages:</b> HTML/CSS, JavaScript
												</p>
												<p className='text mb-3'>
													<b>Frameworks:</b> Bootstrap 3
												</p>
												<p className='text mb-3'>
													<b>Applications:</b> JetBrains CLion, Putty, Notepad++
												</p>
											</div>
											<div className='project-modal-btn'>
												<a className='btn btn-primary btn-lg rounded-pill project-modal-dismiss' href='#/'>Close</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- END project modals -->*/}
					</section>
				</Cards>
			</React.Fragment>
		)
	}
}
export default projects;
/*





--------------------------------------------------------------------------------

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
			<div id='comp' className='card-collapse collapse'>
				<div className='card-body'>asdfasdf</div>
			</div>
		</div>
	</div>
</Cards>
*/
