import React, { Component } from 'react';
import { Cards } from './projects.style.js';
import { Content } from '../../themes/grid';
import att from '../images/attitunes-logo.png';
import mmc from '../images/MMC.png';
import csu from '../images/csub.png';

class Projects extends Component {

	render() {
		return (
			<React.Fragment>
				<Content>
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
				</Content>
			</React.Fragment>
		)
	}
}
export default Projects;
