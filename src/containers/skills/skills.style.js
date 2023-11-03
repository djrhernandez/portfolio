import styled from 'styled-components'
import { colors } from '../../themes/colors'
import media from "../../themes/media"

export const Section = styled.div`
	color:				${({color}) => colors.ivory};
	background-color:	${({color}) => colors.mud};

	div {
		border: 1px solid white;
	}

	h3 {
		margin:			0;
		padding:		1rem;
		font-size:		2rem;
		text-transform:	uppercase;
		letter-spacing:	5px;
	}

	.skills {
		.header {
			padding: 1.25em;

			.title {
				text-align: center;
			}
		}

		.body {
		}	
	}

	.card {
		border-radius: 		1rem;
		margin: 			5px;
		margin-top: 		0px;
		overflow:			hidden;
		color:				${({color}) => colors.mud};
		box-shadow:			0px 5px 10px 0px rgba(0, 0, 0, 0.75);
	}

	.card-header {
		border:				0;
		border-top-radius:	inherit;
		text-align:			center;
		color:				${({color}) => colors.ivory}
		background-color:	${({color}) => colors.mud};

		${media.large`
			padding: 0.50rem;
		`}

		//&:after {
		// 	content:		"";
		// 	z-index:		-1;
		// 	bottom:			1px;
		// 	width:			85%;
		// 	display:		block;
		// 	margin:			0 auto!important;
		// 	border-bottom: 	1px solid rgba(255, 255, 255, 0.25);
		// }
	}

	.card-footer {
		background-color:	${({color}) => colors.ivory};
	}

	.image-text {
		padding:		0.50rem 1rem;
		letter-spacing:	1px;
		font-family:	Montserrat;
		text-align:		center;
		color:			${({color}) => colors.mud};

		${media.small`
			font-size:	1.15rem;
		`}

		${media.desktop`
			font-size:	1.25rem;
		`};

	}

	.images {
		border-radius: inherit;
	}

	.image-item {
		margin-bottom:	0.25rem;

		
	}

	.img-fluid {
		height: auto;

		${media.medium`
			width: 100%;
			min-width:	64px;
			min-height:	64px;
			max-width:	128px;
			max-height:	128px;
		`};
	}

	.column {
		${media.small`
			padding: 0rem 2.5rem;
		`}
	}
`;
