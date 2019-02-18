import { css } from "styled-components"

const media = { mobile, tablet, desktop };

const sizes = {
	mobile:		600,
	tablet:		768,
	laptop:		992,
	desktop:	1200
}

/* Tablets/Phones above 600px */
function mobile(...args) {
	return css`
		@media only screen and (max-width: ${sizes.mobile}px) {
			${css(...args)}
		}
	`;
}

/* Tablets above 768px */
function tablet(...args) {
	return css`
		@media only screen and (max-width: ${sizes.tablet}px) {
			${css(...args)}
		}
	`;
}

/* Laptops above 992px */
function laptop(...args) {
	return css`
		@media only screen and (max-width: ${sizes.laptop}px) {
			${css(...args)}
		}
	`;
}

/* Laptops/Desktops above 1200px */
function desktop(...args) {
	return css`
		@media only screen and (max-width: ${sizes.desktop}px) {
			${css(...args)}
		}
	`;
}

export default media;
