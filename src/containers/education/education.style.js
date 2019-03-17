import styled from "styled-components"
import { colors } from '../../themes/variables'

export const Sector = styled.div`
	.education {
		padding-top:		2rem!important;
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
		text-align:	center;
		padding-right:	0!important;
	}

	.text {
		font-size:		1.5rem;
		letter-spacing:	0.15rem;

		.subtext {
			font-size:		1rem;
			padding-left:	1rem!important;
			padding-right:	1rem!important;
			margin:			0 0.25rem!important;
			li {
				margin:				0!important;
				padding:			0!important;
				list-style-type: 	initial;
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
