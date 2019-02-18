import styled from "styled-components";
import { colors } from '../../themes/variables'

export const ResumeContainer = styled.div`
	justify-content:	flex-start;
	border: 			1px solid black;
	background-color: 	${({color}) => colors.carbon};
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Headline = styled.div`
	display:		flex;
	font-family: 	Crimson Text;
	font-size: 		1.5em;
	margin:			20px 5px;
	box-shadow:		0 10px 30px 0 rgba(0, 0, 0, 0.025);

	.material-icons {
		text-shadow:	2px 2px 10px rgba(127, 127, 127, 0.25);
		line-height:	1.5;
		margin:			auto 10px;
	}

	li {
		padding: 			5px;
		line-height:		1.75;
		list-style-type: 	none;
	}
`;
