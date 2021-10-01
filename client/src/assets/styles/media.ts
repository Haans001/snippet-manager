/* eslint-disable no-unused-vars */

import { css } from 'styled-components';

const sizes = {
	giant: 1440,
	desktop: 1200,
	netbook: 1000,
	tablet: 768,
	thone: 600,
	phablet: 480,
	phone: 376,
	tiny: 330,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
	// use em in breakpoints to work properly cross-browser and support users
	// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
	const emSize = sizes[label] / 16;
	accumulator[label] = (
		literals: TemplateStringsArray,
		...placeholders: any[]
	) => css`
		@media (max-width: ${emSize}em) {
			${css(literals, ...placeholders)};
		}
	`;
	return accumulator;
}, {}) as Record<
	keyof typeof sizes,
	(l: TemplateStringsArray, ...p: any[]) => string
>;
