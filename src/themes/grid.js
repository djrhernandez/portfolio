import styled from "styled-components";
import media from "../themes/media";
import { colors } from "../themes/variables";

export const Wrapper = styled.div`
	display: 				grid;
	grid-gap:				3vmin;
	grid-template-columns:	2fr 5fr;
	grid-template-rows: 	2fr;

	padding:				15px;
	margin-right: 			auto;
	margin-left: 			auto;
`;

export const Container = styled.div`
	padding:			15px;
	justify-content:	flex-start;
	border:				1px solid black;
	background-color:	${({color}) => colors.carbon};
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2),
						0 4px 20px 0 rgba(0, 0, 0, 0.15),
						0 0 15px 5px rgba(0, 0, 0, 0.15) inset;;

	${media.tablet`
		padding:	5px;
	`};
`;

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

export const Grid = styled.div`
	display: 				grid;
	grid-template-rows: 	3fr;
	grid-gap: 				15px;
	border:					1px solid black;

	${media.desktop`
		display: 				grid;
		grid-template-rows: 	1fr;
		grid-gap: 				5px;
	`};
`;

export const Section = styled.div`
	height: 100%;
`;

// if you want to align text, just use this as it is more readable
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
tag => styled[tag]`
${({ align }) => align && `text-align: ${align};`};
`);

/*
	Container:


	Flex:


	Grid:


*/
