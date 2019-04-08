import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { colors } from '../../themes/variables'
//import media from "../../themes/media"

export const Footer = styled.div`
	.social-media {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};

		.contact {
			text-align: center;

			.material-icons {
				padding: 0.50rem;
				vertical-align: middle;
			}

			div {
				margin-bottom: 0.25rem;
			}

			p {
				display: inline-block;
				vertical-align: middle;
				margin: 0;

				span {
					display: block;
				}
			}
		}

		.media-list {
			margin:				auto;
			padding: 			15px;
			display: 			flex;
			justify-content: 	center;

			li {
				list-style-type:	none;
			}
		}
	}
`;

export const Social = styled(SocialIcon)`
	margin: 			0 1rem;
	border-radius: 		50%;
	transition: 		transform 0.6s ease-in-out;
	-webkit-transition: -webkit-transform 0.6s ease-in-out;
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
