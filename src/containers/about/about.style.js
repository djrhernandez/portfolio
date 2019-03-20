import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const Objective = styled.div`

	.about {
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};

		.text {
			font-family:	Raleway;
			font-size:		1.75rem;
		}
	}
`;
