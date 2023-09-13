import React, { Component } from "react"
import { Container } from "./Header.style"
import portrait from '../../containers/images/portrait.jpeg'

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<header className='masthead'>
						<div className='container-fluid'>
							<img className='img-fluid mb-5 d-block mx-auto' src={portrait} alt='Thumbnail'/>
							<h1>David A. Hernandez II</h1>
							<hr className='star-light'/>
							<div className='sub-header'>
								<h2 className='font-weight-light mb-0'>
									Software Engineer - Web Developer - Information Security Analyst
								</h2>
							</div>
						</div>
					</header>
				</Container>
			</React.Fragment>
		);
	}
}
export default Header;
/*
	<Portrait><img src={portrait} alt='Thumbnail'/></Portrait>
	<Title>David A. Hernandez II</Title>
	<Contact>
		<About><i className='material-icons'>person</i><li>Software Engineer/Developer</li></About>
		<About><i className='material-icons'>pin_drop</i><li>Woodland Hills, CA</li></About>
		<About><i className='material-icons'>email</i><li>djrhernandez@yahoo.com</li></About>
		<About><i className='material-icons'>smartphone</i><li>(661) 444-3691</li></About>
	</Contact>
*/
