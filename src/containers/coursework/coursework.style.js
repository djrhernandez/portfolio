import styled from "styled-components";
import { colors } from '../../themes/variables';

export const Tabs = styled.div`

	.panel {
		border:				1px solid black;
		background-color:	${({color}) => colors.silver};
		border-radius:		5px;
		overflow:			hidden;
	}

	.panel-group {
		margin-bottom: 	10px;
	}

	.panel-title {
		padding:		10px;
		font-size:		1.15em;
		letter-spacing:	3px;
	}

	.panel-body {
		padding:			10px;
		background-color:	${({color}) => colors.platinum};
	}

	li {
		
	}

	a {
		color:	${({color}) => colors.jet};

		&:hover {
			color:	${({color}) => colors.portland};
		}
	}
`;
