import React, { Component } from "react";
import { Portrait, Title, SubTitle, Contact, About, Headline } from "./Sidebar.style"
import Skillbar from './SkillBar';
import portrait from '../../containers/images/portrait.jpg';
import { colors } from '../../themes/variables';
import { Container, Content } from '../../themes/grid';

class Sidebar extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Content>
						<Portrait><img src={portrait} alt='Thumbnail'/></Portrait>
						<Title>DAVID A. HERNANDEZ II</Title>
						<Contact>
							<About><i className='material-icons'>person</i><li>Software Engineer/Developer</li></About>
							<About><i className='material-icons'>pin_drop</i><li>Woodland Hills, CA</li></About>
							<About><i className='material-icons'>email</i><li>djrhernandez@yahoo.com</li></About>
							<About><i className='material-icons'>smartphone</i><li>(661) 444-3691</li></About>
						</Contact>
					</Content>
					<Content>
						<SubTitle><i className='material-icons'>computer</i><li>Skills:</li></SubTitle>
						<Headline>
							<Skillbar percentage = {90} color = {colors.jet}>C#/C++ (Jet)</Skillbar>
							<Skillbar percentage = {88} color = {colors.navy}>PHP (Navy)</Skillbar>
							<Skillbar percentage = {85} color = {colors.blue}>Java (Blue)</Skillbar>
							<Skillbar percentage = {82} color = {colors.platinum}>SQL (Platinum)</Skillbar>
							<Skillbar percentage = {78} color = {colors.portland}>JavaScript (Portland)</Skillbar>
							<Skillbar percentage = {75} color = {colors.jade}>Python (Jade)</Skillbar>
						</Headline>
					</Content>
				</Container>
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
