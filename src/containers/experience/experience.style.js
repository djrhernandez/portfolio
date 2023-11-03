import styled from "styled-components"
import { colors } from '../../themes/colors'
import media from "../../themes/media"

export const Work = styled.div`
	.work {
		color:				${({ color }) => colors.mud};
		background-color:	${({color}) => colors.ivory};

		.work-item {
			opacity:			0.85;
			margin:				2rem;
			color:				${({color}) => colors.ivory};
			background-color:	${({color}) => colors.mud};
			box-shadow:			0 5px 10px 0 rgba(0, 0, 0, 1),
								0 0 15px 5px rgba(0, 0, 0, 0.125) inset;
			${media.small`
				padding:	1rem;
			`}
		}

		.image {
			text-align:		center;
			padding:		3rem;
		}

		.others {
			font-size: 0.5rem;

			.image {
				padding: 3rem;
			}

			.text {
				.position {
					font-size: 1rem;
				}
			}

			.subtext {
				margin:		1rem auto;

				${media.medium`
					font-size: .75rem;
				`}

				${media.large`
					font-size: 1rem;
				`}
			}
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
				font-size:		0.5rem;
				padding-top:	0.75rem;

				${media.small`
					font-size:		0.75rem;
					padding-top:	0rem;
				`}
				${media.large`
					font-size:		1rem;
				`}

			}

			.info {
				color:			${({color}) => colors.dim};
				line-height:	1.1;
				${media.large`
					font-size: 1rem;
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
				font-size: 0.85rem;
			`}

			${media.large`
				font-size: 1rem;
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
