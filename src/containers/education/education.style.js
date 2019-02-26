import styled from "styled-components";
import { colors } from '../../themes/variables';

export const Sector = styled.div`
	display: 				grid;
	padding:				10px;
	grid-gap: 				5px;
	grid-template-columns: 	4fr 2fr;

	.position {
		float:	left;
	}

	.date {
		margin:			auto;
		margin-right: 	0;
		font-size:		0.9em;
		text-align:		right;

		div {
			padding:	5px;
			float:		left;
		}
		.material-icons {
			float:	left;
			color:	${({color}) => colors.jet};
		}

		li {
			list-style-type: 	none;
		}
	}

	.text {
		margin:			auto 0;
		padding:		10px;
		font-size: 		0.9em;
	}

	a {
		padding:			10px;
		color: 				inherit;
		cursor: 			pointer;
		text-decoration: 	none;
		vertical-align:		middle;

		&:hover {
			color:				${({color}) => colors.portland};
			text-decoration: 	underline;

		}
	}

	img {
		width:		56px;
		height:		100%;
	}
`;
