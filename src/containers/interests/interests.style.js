import styled from "styled-components"
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const Others = styled.div`
	.interests {
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};

		.container {
			height:	100%!important;
			.row {
				height:	100%!important;

				.item {
					margin:	0 auto!important;
					padding-bottom:	1rem!important;
				}
			}
		}

		.card {
			height:				100%!important;
			padding:			1rem;
			background-color:	${({color}) => colors.silver};
			box-shadow:			0px 5px 10px -5px rgba(0, 0, 0, 0.75),
								0px 0px 15px  5px rgba(255, 255, 255, 0.125) inset;

			.card-body {
				margin:		0 auto;
				text-align:	center;

				${media.medium`
					padding:	1.0rem 0.50rem;
					font-size:	1.2rem;
				`}

			}
		}
	}

`;
