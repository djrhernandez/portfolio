import styled from "styled-components";
import media from "../themes/media";
//import { colors } from "../themes/variables";

/* Used in App.js */
export const Wrapper = styled.div`
	padding:	0;
	${media.large`
		padding:	0 8rem;
	`};
`;

/* Use to align text to make it more readable */
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
tag => styled[tag]`
${({ align }) => align && `text-align: ${align};`};
`);
