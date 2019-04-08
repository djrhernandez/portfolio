import React, { Component } from 'react'
import { Footer, Social } from './SocialMedia.style'

class SocialMedia extends Component {
  render() {
    return (
		<Footer>
			<section className='social-media' id='social-media'>
				<div className='container p-3'>
					<div className='row'>
						<div className='media-list'>
							<li><Social url="https://www.instagram.com/djrhernandez"/></li>
							<li><Social url="https://www.facebook.com/djrhernandez"/></li>
							<li><Social url="https://www.linkedin.com/in/djrhernandez"/></li>
							<li><Social color={"black"} url="https://github.com/djrhernandez"/></li>
						</div>
					</div>

					<div className='contact row'>
						<div className='col-4 m-auto'>
							<i className='material-icons'>place</i>
							<p>
								<a href='http://maps.google.com/maps?q=22123+Cohasset+St,+Canoga+Park,+CA+91303' target='_blank'>
								<span>22123 Cohasset St.</span>
								Canoga Park, CA 91303
								</a>
							</p>
						</div>
						<div className='col-4 m-auto'>
							<p>
								<i className='material-icons'>email</i>
								<a href='mailto:djrhernandez@yahoo.com'>djrhernandez@yahoo.com</a>
							</p>
						</div>
						<div className='col-4 m-auto'>
							<p>
								<i className='material-icons'>local_phone</i>
								<a href='tel:+16614443691'>(661) 444-3691</a>
							</p>
						</div>
					</div>
				</div>
	  		</section>
		</Footer>
    );
  }
}
export default SocialMedia;
