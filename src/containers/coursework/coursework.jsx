import React, { Component } from 'react';
import { Tabs } from './coursework.style.js';
import { Content } from '../../themes/grid';
import Panel from './panel';

class Coursework extends Component {
	render() {
		return (
			<React.Fragment>
				<Content>
					<Tabs>
						<Panel 	course 	= 'course1' subject = 'Web Development'>
							<li>PHP, JavaScript, HTML, CSS</li>
						</Panel>

						<Panel 	course 	= 'course2' subject = 'Database Systems'>
							<li>Oracle, SQL, PHP, Bootstrap</li>
						</Panel>

						<Panel 	course 	= 'course3' subject = 'Software Engineering'>
							<li>C++, OpenGL, OpenAL, GLEW</li>
						</Panel>

						<Panel 	course	= 'course4' subject = 'Artificial Intelligence'>
							<li>Fuzzy Logic, Neural Networks, Genetic Algorithms/Programming</li>
						</Panel>

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
					</Tabs>
				</Content>
			</React.Fragment>
		)
	}
}
export default Coursework;
