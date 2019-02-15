import { css } from "styled-components"

const media = { tablet, desktop };

const sizes = {
	tablet:		768,
	desktop:	992
}

function tablet(...args) {
	return css`
		@media (min-width: ${sizes.tablet}px) {
			${css(...args)}
		}
	`;
}

function desktop(...args) {
	return css`
		@media (min-width: ${sizes.desktop}px) {
			${css(...args)}
		}
	`;
}

export default media;
