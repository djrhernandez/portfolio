import React, { Component } from 'react';
import { Section } from './skills.style.js';
import boot from '../images/web/bootstrap-logo.png'
import cplus from '../images/cplus-logo.png'
import html from '../images/web/html-css-logo.png'
import java from '../images/java-logo.png'
import jscript from '../images/web/javascript-logo.png'
import jquery from '../images/web/jquery-logo.png'
import json from '../images/web/json-logo.png'
import node from '../images/web/nodejs-logo.png'
import php from '../images/web/php-logo.png'
import python from '../images/python-logo.png'
import react from '../images/web/react-logo.png'
import redux from '../images/web/redux-logo.png'
import sql from '../images/sql-logo.png'
import android from '../images/apps/android-logo.png'
import apple from '../images/apps/apple-logo.png'
import atom from '../images/apps/atom-logo.png'
import azure from '../images/apps/azure-logo.png'
import jetbrains from '../images/apps/jetbrains-logo.png'
import linux from '../images/apps/linux-logo.png'
import netbeans from '../images/apps/netbeans-logo.png'
import unix from '../images/apps/unix-logo.png'
import vim from '../images/apps/vim-logo.png'
import visual from '../images/apps/visualstudio-logo.png'
import vmware from '../images/apps/vmware-logo.png'
import windows from '../images/apps/windows-logo.png'
import x11 from '../images/apps/x11-logo.png'
import xamarin from '../images/apps/xamarin-logo.png'
//import  from '../images/-logo.png'

class Skills extends Component {
	render() {
		return (
			<React.Fragment>
				<Section>
					<section className='skills' id='skills'>
						<div className='container py-5'>
							<h2 className='text-center'>skills</h2>
							<hr className='poly-light'/>
							<div className='container'>
								{/* Programming Languages */}
								<div className='card'>
									<div className='card-header'>
										<h3 className='font-weight-light'>Languages</h3>
									</div>
									<div className='card-content'>
										<div className='images row'>
											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={cplus} alt='C++'/>
													<div className='image-text'>C++/C#</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={java} alt='Java'/>
													<div className='image-text'>Java</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={python} alt='Python'/>
													<div className='image-text'>Python</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={sql} alt='SQL'/>
													<div className='image-text'>SQL</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={html} alt='HTML'/>
													<div className='image-text'>HTML5/CSS3</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={jscript} alt='JavaScript'/>
													<div className='image-text'>JavaScript</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={react} alt='JSX'/>
													<div className='image-text'>JSX</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={php} alt='PHP'/>
													<div className='image-text'>PHP</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Frameworks */}
								<div className='card'>
									<div className='card-header'>
										<h3 className='font-weight-light'>Frameworks</h3>
									</div>
									<div className='card-content'>
										<div className='images row'>
											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={boot} alt='Bootstrap 4'/>
													<div className='image-text'>Bootstrap 4</div>
												</div>
											</div>

											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={jquery} alt='jQuery'/>
													<div className='image-text'>jQuery</div>
												</div>
											</div>

											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={json} alt='JSON'/>
													<div className='image-text'>JSON</div>
												</div>
											</div>

											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={node} alt='Node.js'/>
													<div className='image-text'>Node.js</div>
												</div>
											</div>

											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={react} alt='React.js'/>
													<div className='image-text'>React.js</div>
												</div>
											</div>

											<div className='col-lg-2 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={redux} alt='Redux'/>
													<div className='image-text'>Redux</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Operating Systems */}
								<div className='card'>
									<div className='card-header'>
										<h3 className='font-weight-light'>Operating Systems</h3>
										<div className='card-shadow'/>
									</div>
									<div className='card-content'>
										<div className='images row'>
											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={apple} alt='Mac OS X'/>
													<div className='image-text'>Mac OS X</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={linux} alt='Linux'/>
													<div className='image-text'>Linux</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={unix} alt='Unix'/>
													<div className='image-text'>Unix</div>
												</div>
											</div>

											<div className='col-lg-3 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={windows} alt='Windows'/>
													<div className='image-text'>Windows</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								{/* Software Applications */}
								<div className='card'>
									<div className='card-header'>
										<h3 className='font-weight-light'>Software Applications</h3>
									</div>
									<div className='card-content'>
										<div className='images row'>
											<div className='col-md-25 col-sm-6 '>
												<div className='image-item'>
													<img className='img-fluid' src={android} alt='Android Studio'/>
													<div className='image-text'>Android Studio</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={atom} alt='Atom'/>
													<div className='image-text'>Atom</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={azure} alt='Azure'/>
													<div className='image-text'>Microsoft Azure</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={jetbrains} alt='JetBrains'/>
													<div className='image-text'>JetBrains</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={netbeans} alt='Netbeans'/>
													<div className='image-text'>Netbeans</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={vim} alt='Vim'/>
													<div className='image-text'>Vi/Vim</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={visual} alt='Visual Studio'/>
													<div className='image-text'>Visual Studio</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={vmware} alt='VMWare'/>
													<div className='image-text'>VMWare</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={x11} alt='X11'/>
													<div className='image-text'>X11</div>
												</div>
											</div>
											<div className='col-md-25 col-sm-6'>
												<div className='image-item'>
													<img className='img-fluid' src={xamarin} alt='Xamarin'/>
													<div className='image-text'>Xamarin</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</section>
				</Section>
			</React.Fragment>
		)
	}
}
export default Skills;
