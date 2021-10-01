const theme = {
	colors: {
		blue100: '#2E86DE',
		blue100off: '#2592FF',
		blue200: '#6783A4',
		blue300: '#3c4e63',
		blue400: '#283748',
		blue500: '#222F3E',

		white: '#FFFFFF',
	},

	fonts: {
		primary: "'IBM Plex Mono', monospace",
	},

	fontSizes: {
		xs: `1rem`,
		sm: `1.2rem`,
		base: `1.6rem`,
		md: `2rem`,
		lg: `2.5rem`,
		xl: `3rem`,
		xxl: `3.5rem`,
	},

	easing: {
		easeInCubic: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
		easeOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
		easeInOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
		easeInExpo: `cubic-bezier(0.95, 0.05, 0.795, 0.035)`,
		easeOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
		easeInOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
		easeInBack: `cubic-bezier(0.6, -0.28, 0.735, 0.045)`,
		easeOutBack: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
		easeInOutBack: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
	},

	transition: `all 0.25s cubic-bezier(0.3, 0, 0.4, 1);`,
};

export default theme;
