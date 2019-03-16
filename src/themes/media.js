import { css } from "styled-components"

const media = { mobile, tablet, laptop, desktop };

const sizes = {
	mobile:		576,
	tablet:		768,
	laptop:		992,
	desktop:	1200
}

/* Landscape Phones above 576px */
function mobile(...args) {
	return css`
		@media (min-width: ${sizes.mobile}px) {
			${css(...args)}
		}
	`;
}

/* Tablets above 768px */
function tablet(...args) {
	return css`
		@media (min-width: ${sizes.tablet}px) {
			${css(...args)}
		}
	`;
}

/* Laptops above 992px */
function laptop(...args) {
	return css`
		@media (min-width: ${sizes.laptop}px) {
			${css(...args)}
		}
	`;
}

/* Desktops above 1200px */
function desktop(...args) {
	return css`
		@media (min-width: ${sizes.desktop}px) {
			${css(...args)}
		}
	`;
}

export default media;
