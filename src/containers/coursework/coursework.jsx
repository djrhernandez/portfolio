import React, { Component } from 'react'
import { Courses } from './coursework.style.js'
//import Panel from './panel'

class Coursework extends Component {
	render() {
		return (
			<React.Fragment>
				<Courses>
				<section className='coursework' id='coursework'>
					<div className='container-fluid py-5'>
						<h2 className='text-center'>Related Coursework</h2>
						<hr className='subject-dark'/>
						<div className="card-deck px-5 py-3">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Web Development</h5>
									<p className="card-text">PHP, JavaScript, HTML, CSS</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Database Systems</h5>
									<p className="card-text">Oracle, SQL, PHP, Bootstrap</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Software Engineering</h5>
									<p className="card-text">C++, OpenGL, OpenAL, GLEW, Software Development Life Cycles</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Artificial Intelligence</h5>
									<p className="card-text">Fuzzy Logic, Neural Networks, Genetic Algorithms/Programming</p>
								</div>
							</div>
						</div>

						<div className="card-deck px-5 py-3">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Computer Graphics</h5>
									<p className="card-text">PHP, JavaScript, HTML, CSS</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Distributed & Parallel Computation</h5>
									<p className="card-text">Java, C++, Lightweight Java Game Library (LWJGL)</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Digital Forensics</h5>
									<p className="card-text">Intrusion Detection & Prevention Systems</p>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Advanced Networks & Computer Security</h5>
									<p className="card-text">Kali Linux, Steganography, OpenSSL</p>
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
	<Panel 	course 	= 'course5' subject = 'Computer Graphics'>
		<li>Ray Tracing, 2D/3D Projection, Texture Mapping, Surface Shading, Computer Animation</li>
	</Panel>

	<Panel 	course 	= 'course6' subject = 'Distributed & Parallel Computation'>
		<li>Java, C++, Lightweight Java Game Library (LWJGL)</li>
	</Panel>

	<Panel 	course 	= 'course7' subject = 'Digital Forensics'>
		<li>Intrusion Detection/Prevention Systems</li>
	</Panel>

	<Panel 	course 	= 'course8'	subject = 'Advanced Networks & Computer Security'>
		<li>Kali Linux, Steganography, OpenSSL</li>
	</Panel>
*/
