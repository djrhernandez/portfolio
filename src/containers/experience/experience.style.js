import styled from "styled-components"
import { colors } from '../../themes/variables'

export const Work = styled.div`
	.work {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};
	}

	.row {
		opacity:			0.85;
		margin:				2rem 0!important;
		padding-top:		1rem!important;
		padding-bottom:		1rem!important;
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};
		box-shadow:			0 5px 10px 0 rgba(0, 0, 0, 2),
							0 0 15px 5px rgba(0, 0, 0, 0.15) inset;
	}

	.image {
		text-align:		center;
		padding-right:	0!important;
	}

	.text {
		font-size:		1.5rem;
		letter-spacing:	0.15rem;

		.location {
			font-size:		1rem;
			text-indent:	0.25rem;
			padding-bottom:	1.25rem!important;
		}

		.subtext {
			font-size:		1rem;
			padding-left:	1rem!important;
			padding-right:	1rem!important;
			margin:			0 0.25rem!important;
			li {
				list-style-type: 	initial;
				padding-bottom:		1rem;
			}
		}
	}

	.date {
		font-size:		1.2rem;
		.material-icons {
			float: 		left;
			padding:	1rem!important;
			margin:		1rem 0!important;
		}
		.range {
			line-height: 3;
		}
	}

	li {
		list-style-type: 	none;
	}

	a {
		font-size:			2.5rem;
		color: 				inherit;
		cursor: 			pointer;
		text-decoration: 	none;
		vertical-align:		middle;

		&:hover {
			color:				${({color}) => colors.tangerine};
			text-decoration: 	underline;
		}
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
