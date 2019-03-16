import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const NavContainer = styled.div`
	#mainNav {
		padding-top:		1rem;
		padding-bottom:		1rem;
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.jet};
		letter-spacing:		0.2rem;
		text-transform:		uppercase!important;
		${media.laptop`
			padding-top:	1.5rem;
			padding-bottom:	1.5rem;
			transition:		padding-top .3s, padding-bottom .3s;
		`};

		.navbar-brand {
			font-size:	1rem;
			color:	${({color}) => colors.ivory};
		}

		.navbar-nav {
			margin-top:	1rem;
			line-height: 2;
			list-style-type:	none;
			${media.laptop`
				margin-top:	0;
			`};
		}
	}

	#mainNav .navbar-nav li.nav-item a.nav-link {
		color:	${({color}) => colors.ivory};
	}

	#mainNav .navbar-nav li.nav-item a.nav-link:hover {
		color:	${({color}) => colors.tangerine};
	}

	#mainNav .navbar-nav li.nav-item a.nav-link:active,
	#mainNav .navbar-nav li.nav-item a.nav-link:focus {
		color:	${({color}) => colors.ivory};
	}

	#mainNav .navbar-nav li.nav-item a.nav-link.active {
		color:	${({color}) => colors.tangerine};
	}

	#mainNav .navbar-nav > li.nav-item > a.nav-link.active {
		${media.laptop`
			color:		${({color}) => colors.ivory};
			background:	${({color}) => colors.tangerine};
		`};
	}

	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:active,
	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus,
	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
		${media.laptop`
			color:		${({color}) => colors.ivory};
			background:	${({color}) => colors.tangerine};
		`};
	}

	.navbar-shrink {
		${media.laptop`
			padding-top:	0.5rem;
			padding-bottom:	0.5rem;
		`};
	}
	.navbar-shrink .navbar-brand {
		${media.laptop`
			font-size:	1.5rem;
		`};
	}

	#mainNav .navbar-toggler {
		display:			flex;
		background-color:	${({color}) => colors.tangerine};
		border-radius:		.25rem!important;
		${media.laptop`
			display: none;
		`};

		.material-icons {
			line-height:	1;
			margin:			5px;
		}

		ul {
			padding:			0;
			margin:				auto;
			list-style-type:	none;
		}
	}
`;
