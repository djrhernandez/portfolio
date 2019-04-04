import { css } from "styled-components"

const media = { small, medium, large, desktop };

const sizes = {
	xsmall:		575,
	small:		576,
	medium:		768,
	large:		992,
	desktop:	1200
}

/* Any device w/screen smaller than 576px
function xsmall(...args) {
	return css`
		@media (max-width: ${sizes.xsmall}px) {
			${css(...args)}
		}
	`;
}
*/

/* Landscape Phones above 576px */
function small(...args) {
	return css`
		@media (min-width: ${sizes.small}px) {
			${css(...args)}
		}
	`;
}

/* Tablets above 768px */
function medium(...args) {
	return css`
		@media (min-width: ${sizes.medium}px) {
			${css(...args)}
		}
	`;
}

/* Laptops above 992px */
function large(...args) {
	return css`
		@media (min-width: ${sizes.large}px) {
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
