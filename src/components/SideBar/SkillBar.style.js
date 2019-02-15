import styled from "styled-components";
import { colors } from '../../themes/variables'

export const Skill = styled.div`
	margin:				10px auto;
	cursor: 			pointer;
	position: 			relative;
`;

export const SkillName = styled.div`
	font-family:		Overlock SC;
	font-weight:		500;
	font-size:			1.25em;
	letter-spacing:		3px;
	color: 				${({color}) => colors.jet};
	padding:			5px;
`;

export const Box = styled.div`
	opacity: 		1;
	transition: 	all 0.4s ease-in-out;
	vertical-align:	middle;
	text-align:		center;

	&:hover {
		transform: 	scale(1.01, 1.2);
		opacity:	1;
	}
`;

export const Percentage = styled.div`
	vertical-align:		middle;
    text-align: 		center;
	color:				darkgrey;
	background-color: 	${({color}) => color};
	width: 				${({percentage}) => percentage}%;
	height: 			30px;
	border-radius:		15px;
	line-height:		30px;

	{/* On hover over each item in the sidebar */}
	&:hover {
		color: white;
		&:after {
			content: 			" ";
			position: 			absolute;
			left: 				0;
			top: 				0;
			width: 				100%;
			height: 			100%;
			z-index: 			-1;
			transform: 			scale(1.1);
		}
	}
`;
