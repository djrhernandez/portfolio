import styled from "styled-components";
import { colors } from '../../themes/variables';

export const Cards = styled.div`

	img {
	}

	.card {
		overflow:			hidden;
		border-radius:		.75rem;
		box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2);
		background-color:	${({color}) => colors.lightgrey};
	}

	.card-header {
		font-size:			1.15em;
		background-color:	${({color}) => colors.portland};
	}

	.card-body {
		margin:		auto;
		padding:	.5rem;
		flex:		initial;
	}

	a {
		color:	${({color}) => colors.jet};

		&:hover {
			color:	${({color}) => colors.navy};
		}
	}
`;
