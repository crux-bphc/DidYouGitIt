const tailwindScrollbar = require('tailwind-scrollbar');

module.exports = {
	content: ['./src/**/*.{tsx,js,ts,jsx}'],
	theme: {
		colors: {
			'dark-1': 'var(--color-dark-1)',
			'dark-2': 'var(--color-dark-2)',
			gray: 'var(--color-gray)',
			blue: 'var(--color-blue)',
			white: 'var(--color-white)',
			transparent: 'transparent',
		},

		fontFamily: {
			sans: ['var(--font-family)'],
		},
	},
	plugins: [tailwindScrollbar],
};
