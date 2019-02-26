import React, { Component } from 'react';
import csub from '../images/csub-logo.png';
import will from '../images/willamette-logo.png';
import { Sector } from './education.style.js';
import { Content } from '../../themes/grid';

class Education extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Content>
					<Sector>
						<div className='position'>
							<img className='img-fluid' src={csub} alt='CSUB'/>
							<b><a href="https://www.cs.csub.edu">California State University Bakersfield</a></b>
						</div>
						<div className='date'>
							<div><i className={this.icons}>date_range</i></div>
							<div><li>August 2015 - May 2018</li></div>
						</div>
						<div className='text'>B.S. in Computer Science, GPA: 3.28</div>
					</Sector>
				</Content>

				<Content>
					<Sector>
						<div className='position'>
							<img id='will' className='img-fluid' src={will} alt='Willamette'/>
							<b><a href="https://www.willamette.edu">Willamette University</a></b>
						</div>
						<div className='date'>
							<div><i className={this.icons}>date_range</i></div>
							<div><li>August 2010 - May 2014</li></div>
						</div>
						<div className='text'>B.A. in Economics, Minor in Psychology</div>
					</Sector>
				</Content>
			</React.Fragment>
		)
	}


}
export default Education;

//import <component> from '../components/<folder>/<file>';
