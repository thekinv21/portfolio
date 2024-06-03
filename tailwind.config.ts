import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			md: '480px',
			lg: '834px',
			xl: '1440px',
			'2xl': '1500px',
		},

		extend: {
			colors: {
				primary: '#171717',
				secondary: '#6B7280',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
