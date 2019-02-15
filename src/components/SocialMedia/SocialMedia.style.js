import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
//import media from "theme/media";

export const Footer = styled.ul`
	margin: 			10px;
	display: 			flex;
	justify-content: 	center;

	li {
		list-style-type:	none;
	}
`;

export const Social = styled(SocialIcon)`
	margin: 			0 30px;
	border-radius: 		50%;
	transition: 		transform 0.6s ease-in-out;
	-webkit-transition: -webkit-transform 0.8s ease-in-out;
	&:hover {
		transform: 			rotate(360deg);
		-webkit-transform: 	rotate(360deg);

	}
`;

/*	Footer:
${media.desktop`
	width: auto;
	display: inline;
	justify-content: initial;

	position: fixed;
	top: 45%;
	li {
		padding: 20px 0;
	}
`};

	Social:
	${media.desktop`
		margin: 0;
	`};

*/
