import React, { Component } from 'react';
import csub from '../images/csub-logo.png';
import will from '../images/bearcat-logo.png';
import { Sector } from './interests.style.js';
import { Content } from '../../themes/grid';

class Interests extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Content>
					<Sector>
						<div>
							<li>Alumni of the Sigma Chi Fraternity</li>
							<li>CSUB Computer Science Club</li>
							<li>KIT Community and MESH Cowork</li>
						</div>
					</Sector>
				</Content>
			</React.Fragment>
		)
	}


}
export default Interests;
