import React, { Component } from 'react'
import { Others } from './interests.style.js'

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
							<div className='container'>
								<div className="row">
									<div className='item col-6 col-lg-3'>
										<div className="card">
											<div className="card-body">
												<p className="card-text">Alumni of the Sigma Chi Fraternity</p>
											</div>
										</div>
									</div>
									<div className='item col-6 col-lg-3'>
										<div className="card">
											<div className="card-body">
												<p className="card-text">CSUB Computer Science Club</p>
											</div>
										</div>
									</div>
									<div className='item col-6 col-lg-3'>
										<div className="card">
											<div className="card-body">
												<p className="card-text">KIT Community & MESH Cowork</p>
											</div>
										</div>
									</div>
									<div className='item col-6 col-lg-3'>
										<div className="card">
											<div className="card-body">
												<p className="card-text">Volunteer Aide for Hazeltine Elementary & Valey Alternative School</p>
											</div>
										</div>
									</div>
								</div>
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
<Sector>
<div>
<li>Alumni of the Sigma Chi Fraternity</li>
<li>CSUB Computer Science Club</li>
<li>KIT Community and MESH Cowork</li>
</div>
</Sector>
*/
