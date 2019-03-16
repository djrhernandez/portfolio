import styled from "styled-components";
import media from "../themes/media";
import { colors } from "../themes/variables";

/* Used in App.js */
export const Wrapper = styled.div`
	padding:	0 8rem;
`;

/* Used in App.js, Sidebar.js */
export const Container = styled.div`
	${media.tablet` `};
`;

/* Used in Resume.js */
export const Grid = styled.div`
	${media.desktop` `};
`;

/* Used in Sidebar, Objective, Education, Coursework, Projects */
export const Content = styled.div`
	margin:				auto;
	padding:			25px;
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
	${media.desktop` `};
`;

/* Use to align text to make it more readable */
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
tag => styled[tag]`
${({ align }) => align && `text-align: ${align};`};
`);
