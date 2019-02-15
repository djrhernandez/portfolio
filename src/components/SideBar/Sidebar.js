import React, { Component } from "react";
import { SidebarContainer, Profile, Portrait, Title, SubTitle, Contact, About, Headline } from "./Sidebar.style"
import Skillbar from './SkillBar'
import portrait from '../../containers/images/portrait.jpg'
import { colors } from '../../themes/variables'

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<SidebarContainer>
					<Profile>
						<Portrait><img className="img-fluid" src={portrait} alt='Thumbnail'/></Portrait>
						<Title>DAVID A. HERNANDEZ II</Title>
						<Contact>
							<About><i className='material-icons'>person</i><li>Software Engineer/Developer</li></About>
							<About><i className='material-icons'>pin_drop</i><li>Woodland Hills, CA</li></About>
							<About><i className='material-icons'>email</i><li>djrhernandez@yahoo.com</li></About>
							<About><i className='material-icons'>smartphone</i><li>(661) 444-3691</li></About>
						</Contact>

						<SubTitle><i className='material-icons'>computer</i><li>Skills:</li></SubTitle>
						<Headline>
							<Skillbar percentage = {90} color = {colors.jet}>C#/C++</Skillbar>
							<Skillbar percentage = {88} color = {colors.navy}>PHP</Skillbar>
							<Skillbar percentage = {85} color = {colors.slate}>Java</Skillbar>
							<Skillbar percentage = {82} color = {colors.urban}>SQL</Skillbar>
							<Skillbar percentage = {78} color = {colors.red}>JavaScript</Skillbar>
							<Skillbar percentage = {75} color = {colors.burgundy}>Python</Skillbar>
						</Headline>
					</Profile>
				</SidebarContainer>
			</React.Fragment>
		);
	}
}
export default Sidebar;
/*
<Sidebar>
	<Profile>
		<Portrait/>
	</Profile>

	<Skillbar></Skillbar>
</Sidebar>

SkillBar Colors:
	* Blue = Languages
	* Slate = Frameworks
	* Grey = Software Applications
*/
