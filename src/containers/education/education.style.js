import styled from "styled-components"
import { colors } from '../../themes/colors'
import media from "../../themes/media"

export const Sector = styled.div`
	.education {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};

		.edu-item {
			padding:			1rem 0rem;
			margin:				4rem 2rem 0rem 2rem;
			color:				${({color}) => colors.mud};
			background-color:	${({color}) => colors.ivory};
			box-shadow:			0px 5px 10px 0px rgba(0, 0, 0, 1),
								0px 0px 15px 5px rgba(0, 0, 0, 0.15) inset;
			.image {
				display:	table;
				text-align:	center;
				margin:		0 auto;
				${media.small`
					padding: 0.5rem;
				`}

				.img-fluid {
					display:	table-cell;
				}
			}

			.text {
				display:	table;
				margin:		1rem auto;
				font-size:	1.75rem;

				${media.small`
					margin:	auto 0;
				`}

				.place {
					margin-bottom:	2rem;
					line-height:	1;
					color:		 	${({color}) => colors.dim};
				}

				.subtext {
					margin:		1rem auto;

					p {
						margin-bottom: 0;
					}
				}

				a {
					font-size:			1.8rem;
					color: 				inherit;
					cursor: 			pointer;
					text-decoration: 	none;

					${media.medium`
						font-size:		2.25rem;
						letter-spacing:	1px;
					`}
					${media.large`
						font-size:		2.5rem;
					`}
					${media.desktop`
						font-size:		2.75rem;
						letter-spacing:	2px;
					`}

					&:hover {
						color:				${({color}) => colors.tangerine};
						text-decoration: 	underline;
					}
				}
			}
		}
	}
`;
