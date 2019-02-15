import styled from "styled-components";

export const Skill = styled.div`
	margin:				15px;
	font-size: 			1em;
	font-weight: 		bold;
	color: 				grey;
	cursor: 			pointer;
	position: 			relative;
`;

export const SkillName = styled.div`
	font-family:	Overlock SC;
	font-weight:	500;
	font-size:		1.2em;
	letter-spacing:	3px;
	color:			black;
	padding:		10px;
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
	font-weight: 		bold;
	vertical-align:		middle;
    text-align: 		center;
	color:				darkgrey;
	background-color: 	${({color}) => color};
	width: 				${({percentage}) => percentage}%;
	height: 			30px;
	border-radius:		15px;
	line-height:		25px;

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
