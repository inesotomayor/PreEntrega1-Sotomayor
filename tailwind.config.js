/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
		screens: {
			xs: '460px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			screens: {
				'short': { 'raw': '(max-height: 849px)' },
				'tall': { 'raw': '(min-height: 850px)' },
				'tallest': { 'raw': '(min-height: 1000px)' },
			},

			colors: {
				'primary': '#ff2b5d',
				'secondary': '#ccc',
				'000': '#000000',
				'111': '#111111',
				'222': '#222222',
				'333': '#333333',
				'444': '#444444',
				'555': '#555555',
				'666': '#666666',
				'777': '#777777',
				'888': '#888888',
				'999': '#999999',
				'aaa': '#aaaaaa',
				'bbb': '#bbbbbb',
				'ccc': '#cccccc',
				'ddd': '#dddddd',
				'eee': '#eeeeee',
				'fff': '#ffffff',
			},

			fontFamily: {
				zillaSlab: ['Zilla Slab', 'serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},

			fontSize: {
				'8px': '8px',
				'9px': '9px',
				'10px': '10px',
				'11px': '11px',
				'12px': '12px',
				'13px': '13px',
				'14px': '14px',
				'15px': '15px',
				'16px': '16px',
				'18px': '18px',
				'20px': '20px',
				'22px': '22px',
				'24px': '24px',
				'26px': '26px',
				'30px': '30px',
				'31px': '31px',
				'32px': '32px',
				'36px': '36px',
				'40px': '40px',
				'50px': '50px',
				'60px': '60px',
			},
		},

		plugins: [],
	},
	/**
	 * Compatibility with SAFARI 11
	 */
	corePlugins: {
		backgroundOpacity: false,
		textOpacity: false,
	},
}
