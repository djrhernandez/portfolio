import styled from "styled-components"
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const Work = styled.div`
	.work {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};

		.work-item {
			opacity:			0.85;
			margin:				1rem auto;
			color:				${({color}) => colors.mud};
			background-color:	${({color}) => colors.ivory};
			box-shadow:			0 5px 10px 0 rgba(0, 0, 0, 1),
								0 0 15px 5px rgba(0, 0, 0, 0.125) inset;
			${media.small`
				padding:	1rem;
			`}
		}

		.logo {

		}

		.image {
			text-align:		center;
			padding-right:	0!important;
		}

		.text {
			letter-spacing:	0.1rem;

			a {
				padding-left:		0.25rem;
				color:				${({color}) => colors.yellow};
				cursor: 			pointer;
				text-decoration: 	none;

				&:hover {
					color:				${({color}) => colors.tangerine};
					text-decoration: 	underline;
				}
			}

			p {
				margin-bottom: 0rem;
			}

			.position {
				font-size:		1.15rem;
				padding-top:	0.75rem;

				${media.small`
					font-size:		1.30rem;
					padding-top:	0rem;
				`}
				${media.large`
					font-size:		1.75rem;
				`}

			}

			.info {
				color:			${({color}) => colors.dim};
				line-height:	1.25;
				${media.large`
					font-size: 1.1rem;
				`}

				.date {
					float: left;
				}
				.material-icons {
					line-height:	0.8;
					font-size:		20px;
					padding-left:	0.50rem;
					color:			${({color}) => colors.dim};
				}
			}
		}


		.subtext {
			margin:		1rem auto;

			${media.medium`
				font-size: 1.1rem;
			`}

			${media.large`
				font-size: 1.25rem;
			`}

			ul {
				padding-inline-start: 2rem;
			}

			li {
				margin-bottom: 0.75rem;
			}
		}
	}
`;
