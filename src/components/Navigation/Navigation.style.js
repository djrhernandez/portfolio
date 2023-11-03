import styled from 'styled-components'
import { colors } from '../../themes/colors'
import media from "../../themes/media"

export const NavContainer = styled.div`
	#mainNav {
		color:				${({color}) => colors.ivory};
		background-color:	${({color}) => colors.jet};
		font-size:			1rem;
		letter-spacing:		0.2rem;
		text-transform:		uppercase!important;
		${media.large`
			font-size:		1.2rem;
			transition:		padding-top .3s, padding-bottom .3s;
		`};

		.navbar-brand {
			color:	${({color}) => colors.ivory};
		}

		.navbar-nav {
			margin-top:	1rem;
			list-style-type:	none;
			${media.large`
				margin-top:	0;
			`};
		}
	}

	#mainNav .container-fluid {
		padding-left:	0.5rem;
		padding-right:	0.5rem;
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
		${media.large`
			color:		${({color}) => colors.ivory};
			background:	${({color}) => colors.tangerine};
		`};
	}

	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:active,
	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus,
	#mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
		${media.large`
			color:		${({color}) => colors.ivory};
			background:	${({color}) => colors.tangerine};
		`};
	}

	.navbar-shrink {
		${media.large`
			padding-top:	0.25rem;
			padding-bottom:	0.25rem;
		`};
	}
	.navbar-shrink .navbar-brand {
		${media.large`

		`};
	}

	#mainNav .navbar-toggler {
		display:			flex;
		background-color:	${({color}) => colors.tangerine};
		${media.large`
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
