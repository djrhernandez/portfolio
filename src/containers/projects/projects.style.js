import styled from "styled-components";
import { colors } from '../../themes/variables'
import media from '../../themes/media'

export const Cards = styled.div`

	.project {
		padding-top:		2rem!important;
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};
		margin-bottom:		5px;
		${media.tablet`
			padding-bottom:	2rem;
			margin-bottom:	-5px;
		`};
	}

	.row {
	}

	.project .project-item {
		position:			relative;
		display:			block;
		max-width:			25rem;
		margin:				auto!important;
		box-shadow:			0 5px 15px 0 rgba(0, 0, 0, 2);
		background-color:	${({color}) => colors.dim};
	}

	.image {
		padding:	1.5rem;
		text-align:	center;

		.mercy {
			margin:	3.1rem auto!important;
		}
		.csub {
			margin:	0.2rem auto!important;
		}
	}

	.project .project-item .project-item-caption {
		position:			absolute;
		display:			flex;
		height:				100%;
		width:				100%;
		opacity:			0;
		text-align:			center;
		transition:			all ease .5s;
		color:				${({color}) => colors.white};
		background-color: 	${({color}) => colors.mud};
	}

	.project .project-item .project-item-caption:hover {
		opacity:	1;
	}

	.project .project-item .project-item-caption .project-item-caption-content {
		margin:		auto!important;
		font-size:	1.5rem;

		i {
			font-size:	5rem;
		}
	}

	.project-modal .project-modal-dialog {
		padding: 	3rem 1rem;
		min-height: calc(100vh - 2rem);
		margin: 	1rem calc(1rem - 8px);
		position: 	relative;
		z-index: 	2;
		box-shadow: 0 0 3rem 1rem rgba(0,0,0,.5);
	}

	.project-modal .project-modal-dialog .close-button {
		position: 	absolute;
		top: 		2rem;
		right: 		2rem;
	}

	.project-modal .project-modal-dialog .close-button i {
		line-height: 38px
	}

	.project-modal .project-modal-dialog h2 {
		font-size:	2rem
	}

	@media (min-width: 768px) {
		.project-modal .project-modal-dialog {
			min-height:	100vh;
			padding: 	5rem;
			margin: 	3rem calc(6rem - 12px);
		}

		.project-modal .project-modal-dialog h2 {
			font-size:	3rem;
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
