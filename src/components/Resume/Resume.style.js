import styled from 'styled-components'
import media from '../../themes/media'

/* 1em = ~16px, 2em = ~32px */
export const Section = styled.div`
	box-shadow:			0 5px 20px 0 rgba(0, 0, 0, 2);

	h2 {
		text-transform:	uppercase;
		font-size:		2.25rem;
		line-height:	2rem;
		letter-spacing:	.75rem;
		${media.large`
			font-size:	3rem;
			line-height: 2.5rem
		`};
	}
`;
