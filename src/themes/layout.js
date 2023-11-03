import styled from "styled-components";
import media from "./media";
//import { colors } from "../themes/colors";

/* Used in App.js */
export const Wrapper = styled.div`
	padding: 0 2rem;

	${media.small`
		padding: 0 4rem;
	`};

	${media.medium`
		padding: 0 8rem;
	`};

	${media.large`
		padding: 0 12rem;
	`};

	${media.desktop`
		padding: 0 16rem;
	`}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;

	${media.small`
		grid-template-columns: 1fr 1fr 1fr;
	`}

	${media.large`
		grid-template-columns: 1fr 1fr 1fr 1fr;
	`}
`;

/* Use to align text to make it more readable */
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
tag => styled[tag]`
${({ align }) => align && `text-align: ${align};`};
`);
