import styled from "styled-components"
import { colors } from '../../themes/colors'
import media from "../../themes/media"

export const Courses = styled.div`
	.coursework {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};

		.row {
			margin:		0 1rem;

			${media.small`
				margin: 0 3rem;
			`}
			${media.large`
				margin: 0 2rem;
			`}
		}

		.card {
			border-radius:		0.25rem;
			box-shadow:			0px 0px 15px 5px rgba(0, 0, 0, 0.125) inset;


			.card-header {
				font-weight:	700;
				font-family:	Montserrat;
				letter-spacing:	1px;
				color:			${({color}) => colors.mud};

				${media.medium`
					font-size:	1.2rem;
				`}

				${media.large`
					font-size:	1.25rem;
				`}

				${media.desktop`
					font-size:	1.4rem;
				`}

				a {
					color:	${({color}) => colors.mud};
				}

				.material-icons {
					float: 			right;
					margin-left:	0.75rem;
					margin-top:		0.2rem;
					transition:		0.3s transform ease-in-out;
				}

				.collapsed .material-icons {
					transform:		rotate(-90deg);
				}
			}

			.card-body {
				padding:	1rem;
				color:		${({color}) => colors.mud};

				${media.large`
					font-size:	1.1rem;
				`}

				${media.desktop`
					font-size:	1.3rem;
				`}

				ul {
					margin: 				auto;
					padding-inline-start:	1.5rem;

					li {
						margin-bottom:	0.75rem;
					}
				}
			}
		}
	}
`;
