import styled from "styled-components"
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const Container = styled.div`

	text-align:			center!important;
	color:				${({color}) => colors.ivory};
	background-color: 	${({color}) => colors.mud};
	box-shadow:			0 4px 20px 0 rgba(0, 0, 0, 2);

	header.masthead {
		padding-top:	calc(4rem + 36px);
		padding-bottom:	4rem;
		letter-spacing:	0.2rem;
		text-align:		center;
		${media.laptop`
			padding-top:	calc(4rem + 72px);
			padding-bottom:	4rem;
			letter-spacing:	0.5rem;
		`};

		.sub-header {
			padding:	.5rem;
			text-align:	center;
			${media.mobile`
				padding:	1.5rem;
			`};
		}

		h1 {
			font-size:		2.25rem;
			line-height:	2rem;
			text-transform:	uppercase!important;
			${media.laptop`
				font-size:		3.5rem;
				line-height:	3rem;
			`}
		}

		h2 {
			font-size:		1.25rem;
			font-family:	Didact Gothic;
			${media.laptop`
				font-size:		2rem;
			`}
		}

		img {
			max-width:		50%;
			border-radius:	50%;
		}
	}
`;

export const Portrait = styled.div`
	display:		flex;
	position:		relative;
	overflow:		hidden;
	max-width:		300px;
	width:			300px;
	height:			300px;
	border-radius:	50%;
	margin:			0 auto;

	img {
		width:			auto;
		height:			100%;
		margin-left:	-70px;
	}
`;

export const SubTitle = styled.div`
	display:		flex;
	font-size: 		1.75em;
	padding:		5px;

	.material-icons {
		text-shadow:	2px 2px 10px rgba(127, 127, 127, 0.25);
		line-height:	1.75;
		margin:			5px;
		color: ${({color}) => colors.jet};
	}
	li {
		padding: 			5px;
		line-height:		1.75;
		list-style-type: 	none;
	}
`;
