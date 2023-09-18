import styled from "styled-components";
import { colors } from '../../themes/variables'
//import media from '../../themes/media'

export const Cards = styled.div`

	.row {
		padding:	0 1rem;
	}

	.project {
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};

		.card {
			overflow:		hidden;
			margin:			0 auto;
			min-height:		325px;
			max-height:		350px;
			border:			0;
			border-radius:	1rem;
			box-shadow:		0 5px 15px 0 rgba(0, 0, 0, 1);

			.card-content {
				display:			table;
				position:			relative;
				min-height:			275px;
				color:				${({color}) => colors.mud};
				background-color:	${({color}) => colors.silver};

				.project-caption {
					position:			absolute;
					display:			flex;
					height:				100%;
					width:				100%;
					opacity:			0;
					transition:			all ease .5s;
					color:				${({color}) => colors.ivory};
					background-color: 	${({color}) => colors.mud};

					&:hover {
						opacity: 1;
					}

					.project-caption-content {
						margin:		auto!important;
						i {
							font-size:	5rem;
						}
					}
				}

				.image {
					display:		table-cell;
					padding:		1.25rem;
					text-align:		center;
					vertical-align:	middle;
					box-shadow:		0px 0px 10px 5px rgba(0, 0, 0, 0.125) inset;
				}
			}

			.card-footer {
				padding:		1rem;
				font-size:		1.3rem;
				text-align:		center;
				letter-spacing:	1px;
			}
		}
	}

	.floating-label-form-group {
		position: relative;
		border-bottom: 1px solid #e9ecef;
	}

	.floating-label-form-group input,
	.floating-label-form-group textarea {
		font-size: 1.5em;
		position: relative;
		z-index: 1;
		padding-right: 0;
		padding-left: 0;
		resize: none;
		border: none;
		border-radius: 0;
		background: none;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
	}

	.floating-label-form-group label {
		font-size: 0.85em;
		line-height: 1.764705882em;
		position: relative;
		z-index: 0;
		top: 2em;
		display: block;
		margin: 0;
		-webkit-transition: top 0.3s ease, opacity 0.3s ease;
		transition: top 0.3s ease, opacity 0.3s ease;
		vertical-align: middle;
		vertical-align: baseline;
		opacity: 0;
	}

	.floating-label-form-group:not(:first-child) {
		padding-left: 14px;
		border-left: 1px solid #e9ecef;
	}

	.floating-label-form-group-with-value label {
		top: 0;
		opacity: 1;
	}

	.floating-label-form-group-with-focus label {
		color: #18BC9C;
	}

	form .row:first-child .floating-label-form-group {
		border-top: 1px solid #e9ecef;
	}
`;
