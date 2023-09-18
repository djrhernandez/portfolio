import React, { Component } from "react"
import { Skill, SkillName, Box, Percentage } from "./SkillBar.style"

class SkillBar extends Component {
	render() {
		return (
			<Skill>
				<SkillName>{this.props.children}</SkillName>
				<Box>
					<Percentage color = {this.props.color} percentage = {this.props.percentage}>
					{this.props.percentage} %
					</Percentage>
				</Box>
			</Skill>
		);
	}
}
export default SkillBar;
