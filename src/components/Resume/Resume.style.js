import styled from "styled-components";
import { colors } from '../../themes/variables'

/* 1em = ~16px, 2em = ~32px */
export const Headline = styled.div`
	display:			flex;
	font-family: 		Crimson Text;
	font-size: 			2em;
	font-weight:		bold;
	letter-spacing:		4px;
	box-shadow:			0 10px 30px 0 rgba(0, 0, 0, 0.05);
	color:				${({color}) => colors.jet};
	background-color:	${({color}) => colors.darkgrey};

	.material-icons {
		text-shadow:	2px 2px 10px rgba(127, 127, 127, 0.25);
		margin:			auto 10px;
		color: 			${({color}) => colors.jet};
	}

	li {
		line-height:		1.5;
		list-style-type: 	none;
	}
`;
