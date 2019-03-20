import styled from 'styled-components'
import { colors } from '../../themes/variables'
import media from "../../themes/media"

export const NavContainer = styled.div`
	#mainNav {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.jet};
		font-size:			1rem;
		letter-spacing:		0.2rem;
		text-transform:		uppercase!important;
		${media.laptop`
			font-size:		1.2rem;
			transition:		padding-top .3s, padding-bottom .3s;
		`};

		.navbar-brand {
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

	/*#mainNav .navbar-nav li.nav-item {
		a.nav-link {
			height:	100%;
			color:	;
		}
		.dropdown {
			height:	100%;
			button.dropdown-toggle {
				border:				0!important;
				margin:				inherit;
				text-transform:		inherit;
				letter-spacing:		inherit;
				color:				inherit;
				background-color:	inherit;

				&:hover {
					color: ;
				}
			}
			button.dropdown-toggle.active {
			}
		}
	}*/

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
			padding-top:	0.25rem;
			padding-bottom:	0.25rem;
		`};
	}
	.navbar-shrink .navbar-brand {
		${media.laptop`

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
