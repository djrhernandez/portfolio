import React from 'react'
import { createGlobalStyle } from "styled-components"
//import media from "themes/media"

/*	Global font sizes from different responsive screens	*/
const GlobalStyle = createGlobalStyle `
	@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

	body {
		font-family: 	'Montserrat', 'Spectral SC', 'Cutive Mono', 'Rubik', sans-serif;
		font-size: 		12px;

		${media.tablet`
			font-size: 18px;

		`};

		${media.desktop`
			font-size: 22px;
		`};

	};

	div {
		padding: 	0px;
		margin:		0px;

	};
`;
