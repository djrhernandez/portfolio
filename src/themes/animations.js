import React from 'react'
import styled from 'styled-components'

const rotate = keyframes`
	from {
		tranform: rotate(0deg);
	}
	to {
		tranform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	display: 	inline-block;
	animation:	${rotate} infinite 20s linear;
	height:		40vmin;
`;
