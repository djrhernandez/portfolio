import styled from "styled-components";
import media from "../themes/media";
import { colors } from "../themes/variables";

/* Used in App.js */
export const Wrapper = styled.div`
	display: 				grid;
	grid-gap:				3vmin;
	grid-template-columns:	2fr 5fr;
	grid-template-rows: 	2fr;

	padding:				15px;
	margin-right: 			auto;
	margin-left: 			auto;
`;

/* Used in App.js, Sidebar.js */
export const Container = styled.div`
	padding:			15px;
	justify-content:	flex-start;
	border:				1px solid black;
	background-color:	${({color}) => colors.darkgrey};
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2),
						0 4px 20px 0 rgba(0, 0, 0, 0.15),
						0 0 15px 5px rgba(0, 0, 0, 0.15) inset;

	${media.tablet`
		padding:	5px;
	`};
`;

/* Used in Resume.js */
export const Grid = styled.div`
	display: 				grid;
	grid-template-rows: 	3fr;
	grid-gap: 				15px;

	${media.desktop`
		display: 				grid;
		grid-template-rows: 	1fr;
		grid-gap: 				5px;
	`};
`;

/* Used in Resume.js */
export const Section = styled.div`
	font-size: 		1.25em;
	font-family:	Carrois Gothic SC;
	letter-spacing: 1px;

	height: 		100%;
	border: 		1px solid black;
	border-radius:	0px 20px 0px 20px;
	overflow:		hidden;

	box-shadow:		0 4px 10px 0 rgba(0, 0, 0, 2),
					0 4px 20px 0 rgba(0, 0, 0, 0.15),
					0 0 15px 5px rgba(0, 0, 0, 0.15) inset;
`;

/* Used in Sidebar, Objective, Education, Coursework, Projects */
export const Content = styled.div`
	padding:			15px;
	font-size:			1em;
	font-family:		Montserrat;
	background-color: 	${({color}) => colors.ivory};
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2),
						0 4px 20px 0 rgba(0, 0, 0, 0.15),
						0 0 15px 5px rgba(0, 0, 0, 0.15) inset;
`;


/* Currently not used anywhere */
export const Flex = styled.div`
	display: 		flex;
	border:			1px solid black;
	align-items: 	center;
	margin-bottom: 	25px;

	${media.desktop`
		padding-left: 	120px;
		padding-right: 	120px;
		padding-top: 	60px;
	`};
`;

/* Use to align text to make it more readable */
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
tag => styled[tag]`
${({ align }) => align && `text-align: ${align};`};
`);
