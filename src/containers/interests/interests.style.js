import styled from "styled-components"
import { colors } from '../../themes/variables'

export const Others = styled.div`
	.interests {
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};

		.card {
			background-color:	${({color}) => colors.silver};
			box-shadow:			0 5px 10px 0 rgba(0, 0, 0, 2),
			0 0 15px 5px rgba(0, 0, 0, 0.15) inset;

			.card-body {
				text-align:	center;
				font-size:	1.25rem;

			}
		}
	}

`;
