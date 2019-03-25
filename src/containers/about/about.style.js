import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from '../../themes/media'

export const Objective = styled.div`

	.about {
		color:				${({color}) => colors.mud};
		background-color:	${({color}) => colors.ivory};
	}

	.col-state {

		position:	relative;
		text-align:	center;

		.col-shadow {
			margin:		1rem auto;
			width:		100%;
			outline:	1px solid rgba(128, 128, 128, 0.125);
			box-shadow:	0px 3px 10px 2px rgba(0, 0, 0, 0.125);
			${media.mobile`
				width:	80%;
			`};
		}

		.image {
			padding:	1rem 0;
			${media.desktop`
			`};

			.img-fluid {
				min-height:	250px;
				/*max-height:	300px;*/
				margin:		0 auto;
				height:		inherit;
			}
		}

		.cal { opacity: 0.200; }
		.ore { opacity: 0.175; }
		.lax {
			opacity: 0.200;
			padding: 1rem 0;
		}

		.col-text {
			display:	table;
			position:	absolute;
			top:		0;
			left:		0;
			right:		0;
			z-index:	10;
			height:		100%;
			padding:	1rem;

			.text {
				display:		table-cell;
				vertical-align:	middle;
				font-size:		1.1rem;
				font-family:	Raleway;
				padding:	1rem 0;

				${media.laptop`
					font-size:	1.2rem;
				`};
				${media.desktop`
					font-size:	1.3rem;
				`};
			}
		}
	}
	p {
		padding:		1rem;
		margin:			0 auto;
	}

`;
