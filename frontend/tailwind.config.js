module.exports = {
	content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
	theme: {
		darkMode: 'media',
		fonts: {
			display: [
				'IBM Plex Mono',
				'Menlo',
				'monospace',
				'gen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			],
			serif: [
				'ui-serif',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: ({colors}) => ({
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			primary: '#CE7B91',
			secondary: '#FFC485',
			snow: '#ffe',
			background: {
				dark: '#1E1A1D',
				light: '#ffe',
			},
			alert: '#FF3864',
			info: '#586994',
			success: '#218380',
			fuzzywuzzy: '#C16E70', // I'm sorry it had such a cute name I had to
			columbia: {
				100: '#C0E8F9',
				200: '#8ED7F6',
				300: '#68C9F3',
				400: '#2FB5EE',
				500: '#1DAEED',
				600: '#1196D0',
				700: '#0E7BAA',
				800: '#095271',
				900: '#06374B',
			},
			emerald: {
				100: '#C0ECD5',
				200: '#A1E3C1',
				300: '#72D5A2',
				400: '#59CD90',
				500: '#38BC78',
				600: '#2F9D64',
				700: '#267E50',
				800: '#1C5E3C',
				900: '#133F28',
			},
			amarath: {
				100: '#DEA6B5',
				200: '#D3889C',
				300: '#C86A83',
				400: '#BD4C6A',
				500: '#A43D58',
				600: '#953750',
				700: '#772C40',
				800: '#682738',
				900: '#4A1C28',
			},
		}),
		animation: {
			none: 'none',
			spin: 'spin 1s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			bounce: 'bounce 1s infinite',
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
		},
		borderColor: ({theme}) => ({
			...theme('colors'),
			DEFAULT: theme('colors.columbia.200', 'currentColor'),
		}),
		borderOpacity: ({theme}) => theme('opacity'),
		borderRadius: {
			none: '0px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		extend: {
			bgImage: {
				texture: 'url("/img/bg2.jpg")',
				hero: 'url("/img/polaroid.jpg")',
			},

		},
	},
	plugins: [],
};

