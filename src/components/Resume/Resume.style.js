import styled from "styled-components";
import { colors } from '../../themes/variables'

export const ResumeContainer = styled.div`
	justify-content:	flex-start;
	border: 			1px solid black;
	background-color: 	${({color}) => colors.carbon};
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;
