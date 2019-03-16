import React, { Component } from "react"
import { Container } from "./Header.style"
import portrait from '../../containers/images/portrait.jpg'
//import { colors } from '../../themes/variables';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<header className='masthead'>
						<div className='container'>
							<img className='img-fluid mb-5 d-block mx-auto' src={portrait} alt='Thumbnail'/>
							<h1>David A. Hernandez II</h1>
							<hr className='star-dark'/>
							<h2 className='font-weight-light mb-0'>Software Engineer - Web Developer - Information Security Analyst
							</h2>
						</div>
					</header>
				</Container>
			</React.Fragment>
		);
	}
}
export default Header;
/*
SkillBar Colors:
	* Blue = Languages
	* Slate = Frameworks
	* Grey = Software Applications

	<React.Fragment>
		<Container>
			<Content>
				<Portrait><img src={portrait} alt='Thumbnail'/></Portrait>
				<Title>David A. Hernandez II</Title>
				<Contact>
					<About><i className='material-icons'>person</i><li>Software Engineer/Developer</li></About>
					<About><i className='material-icons'>pin_drop</i><li>Woodland Hills, CA</li></About>
					<About><i className='material-icons'>email</i><li>djrhernandez@yahoo.com</li></About>
					<About><i className='material-icons'>smartphone</i><li>(661) 444-3691</li></About>
				</Contact>
			</Content>

			<Content>

				<SubTitle><i className='material-icons'>language</i><li>Languages:</li></SubTitle>
				<Headline>
				</Headline>


				<SubTitle><i className='material-icons'>extension</i><li>Frameworks/Tools:</li></SubTitle>
				<Headline>
				</Headline>


				<SubTitle><i className='material-icons'>computer</i><li>Operating Systems:</li></SubTitle>
				<Headline>
				</Headline>


				<SubTitle><i className='material-icons'>save</i><li>Software Applications:</li></SubTitle>
				<Headline>
				</Headline>
			</Content>
		</Container>
	</React.Fragment>

*/
