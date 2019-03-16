import styled from "styled-components"
import { colors } from '../../themes/variables'

export const Courses = styled.div`
	.coursework {
		padding-top:		2rem!important;
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};
	}

	.card {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};
		box-shadow:			0 5px 10px 0 rgba(0, 0, 0, 2),
							0 0 15px 5px rgba(0, 0, 0, 0.15) inset;

		.card-body {
			padding:		1.25rem 1rem!important;

		}
	}
`;

export const Tabs = styled.div`

	.panel {
		border:				1px solid black;
		color:	${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};
		border-radius:		5px;
		overflow:			hidden;
	}

	.panel-group {
		margin-bottom: 	10px;
	}

	.panel-title {
		padding:		10px;
		font-size:		1.15em;
		letter-spacing:	3px;
	}

	.panel-body {
		padding:			10px;
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};
	}

	li {
		list-style-type:	none;
	}

	a {
		color:	${({color}) => colors.ivory};

		&:hover {
			color:	${({color}) => colors.tangerine};
		}
	}
`;
