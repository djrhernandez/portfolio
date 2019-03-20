import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const Section = styled.div`

	.skills {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.mud};

		h3 {
			margin:			0;
			padding:		1rem;
			font-family:	Raleway;
			text-transform:	uppercase;
			letter-spacing:	5px;
			color:			${({color}) => colors.mud};
		}

		.col-25, .col-sm-25, .col-md-25, .col-lg-25, .col-xl-25 {
			position:		relative;
			width:			100%;
			min-height:		1px;
			padding-right:	5px;
			padding-left:	5px;

			${media.tablet`
				-webkit-box-flex:	0;
				-ms-flex:			0 0 20%;
				flex:				0 0 20%;
				max-width:			20%;
			`};
			${media.laptop`
				-webkit-box-flex:	0;
				-ms-flex:			0 0 20%;
				flex:				0 0 20%;
				max-width:			20%;
				padding-right:		15px;
				padding-left:		15px;
			`};
			${media.desktop`
				-webkit-box-flex:	0;
				-ms-flex:			0 0 20%;
				flex:				0 0 20%;
				max-width:			20%;
			`};
		}

		.col-25 {
			-webkit-box-flex:	0;
			-ms-flex:			0 0 20%;
			flex:				0 0 20%;
			max-width:			20%;
		}

		.card {
			margin:				3rem auto!important;
			border-radius: 		0.5rem;
			color:				${({color}) => colors.mud};
			background-color:	${({color}) => colors.ivory};
			box-shadow:			0px 5px 10px 0px rgba(0, 0, 0, 0.75);

			.card-header {
				padding:		1rem;
				margin-bottom:	0;
				border:			0;
				text-align:		center;
				background-color:	${({color}) => colors.ivory};

				&:after {
					content:		"";
					z-index:		-1;
					bottom:			1px;
					width:			75%;
					display:		block;
					margin:			0 auto!important;
					border-bottom: 	1px solid rgba(0, 0, 0, 0.25);
				}
			}

			.card-content {
			}
		}
	}

	.row {
		/*border: 	1px solid cyan;*/
	}

	.images {
		padding-bottom:	1rem;
		margin:		auto 0;

		.image-item {
			${media.laptop`
				margin-bottom:	0.5rem!important;
			`};

			.img-fluid {
				padding:			1rem;
				margin:				0 auto!important;
				min-width:			32px;
				max-height:			92px;
				display:			table-cell;
			}

			.image-shadow {
			}
		}

		.image-item:after {
			content:	"";
			z-index:	-1;
			width:		45%;
			display:	block;
			margin:		-0.5rem auto!important;
			bottom:		5px;
			transform:	scale(0.7);
			box-shadow:	0px 10px 15px 2px rgba(0, 0, 0, 0.4);
		}

		.image-text {
			margin-bottom:	1rem;
			font-family:	Lato;
			font-size:		0.75rem;
			text-align:		center;
			letter-spacing:	1px;
			color:			${({color}) => colors.mud};

			${media.tablet`
				margin-bottom:	0.50rem;
				font-size:		1rem;
			`};

			${media.laptop`
				margin-bottom:	0.75rem;
				font-size:		1rem;
			`};

			${media.desktop`
				margin-bottom:	1rem;
				font-size:		1.2rem;
			`};

		}
	}
`;
