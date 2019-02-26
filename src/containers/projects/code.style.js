import styled from "styled-components";
import { colors } from '../../themes/variables';

export const Snippet = styled.div`
	font-size:			0.9em;
	font-family:		Cutive Mono;

	padding:			10px;
	border:				1px solid black;
	color: 				${({color}) => colors.grey};
	background-color:	${({color}) => colors.ivory};
`;
