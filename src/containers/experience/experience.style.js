import styled from "styled-components"
import { colors } from '../../themes/variables'

export const Work = styled.div`
	.work {
		padding-top:		2rem!important;
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};
	}
`;


export const Sector = styled.div`
	display: 				grid;
	padding:				5px;
	grid-gap: 				5px;
	grid-template-columns: 	4fr 2fr;

	.position { }
	.title { }

	.subtitle {
		line-height:	2;
		font-size:		0.75em;
		text-indent:	10px;
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

		&:hover {
			color:				${({color}) => colors.portland};
			text-decoration: 	underline;

		}
	}

	img {
		float:		left;
		width:		56px;
		height:		100%;
	}
`;
