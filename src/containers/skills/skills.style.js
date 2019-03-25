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
			font-size:		2rem;
			text-transform:	uppercase;
			letter-spacing:	5px;
		}

		.col-25, .col-sm-25, .col-md-25, .col-lg-25, .col-xl-25 {
			position:		relative;
			width:			100%;
			min-height:		1px;
			padding-right:	5px;
			padding-left:	5px;

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
			margin:				2rem auto!important;
			color:				${({color}) => colors.ivory};
			background-color:	${({color}) => colors.mud};
			border:				0;

			.card-header {

				border:				0;
				text-align:			center;
				color:				${({color}) => colors.ivory}
				background-color:	${({color}) => colors.mud};

				&:after {
					content:		"";
					z-index:		-1;
					bottom:			1px;
					width:			85%;
					display:		block;
					margin:			0 auto!important;
					border-bottom: 	1px solid rgba(255, 255, 255, 0.25);
				}
			}

			.card-content {
			}
		}
	}

	.row {
		/*border: 	1px solid cyan;*/
		padding:	0 1rem;
		margin:		auto 0;
	}

	.images {
		padding-bottom:	1rem;

		.card {
			margin:				0.75rem 0.5rem!important;
			border-radius: 		1rem;
			overflow:			hidden;
			color:				${({color}) => colors.mud};
			box-shadow:			0px 5px 10px 0px rgba(0, 0, 0, 0.75);

			${media.tablet`
				margin:			0.75rem 2rem!important;
			`};

			${media.laptop`
				margin:			0.75rem 0rem!important;
			`};

			.card-body {
				padding:			2rem;
				text-align:			center;
				background-color:	${({color}) => colors.azure};
				${media.laptop`
					padding:	1rem;
				`};
			}

			.card-footer {
				font-size:		1rem;
				font-weight:	700;
				background-color:	${({color}) => colors.ivory};
			}
		}

		.image-item {
			margin-bottom:	0.5rem;

			.img-fluid {
				display:	table-cell;
				margin:		0 auto!important;
				min-width:	64px;
				min-height:	64px;
				max-height:	128px;
			}
		}

		.image-text {
			padding:		1rem;
			letter-spacing:	1px;
			font-size:		1.25rem;
			font-family:	Montserrat;
			text-align:		center;
			color:			${({color}) => colors.mud};

			${media.desktop`
				font-size:		1.3rem;
			`};

		}
	}
`;
