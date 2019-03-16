import React, { Component } from 'react'
import { Others } from './interests.style.js'
//import { Content } from '../../themes/grid'

class Interests extends Component {
	icons = 'material-icons';

	render() {
		return (
			<React.Fragment>
				<Others>
					<section className='interests' id='interests'>
						<div className='container py-5'>
							<h2 className='text-center'>Interests</h2>
							<hr className='hot-dark'/>
							<div className='list'>
								<li>Alumni of the Sigma Chi Fraternity</li>
								<li>CSUB Computer Science Club</li>
								<li>KIT Community and MESH Cowork</li>
							</div>
						</div>
					</section>
				</Others>
			</React.Fragment>
		)
	}


}
export default Interests;

/*
<Content>
<Sector>
<div>
<li>Alumni of the Sigma Chi Fraternity</li>
<li>CSUB Computer Science Club</li>
<li>KIT Community and MESH Cowork</li>
</div>
</Sector>
</Content>
*/
