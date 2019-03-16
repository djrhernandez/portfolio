import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from '../../themes/media'

export const About = styled.div`

	.about {

		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};
	}

	.text {
		font-size:	1.75rem;
	}
`;
