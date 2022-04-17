module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		'postcss-import': {},
		tailwindcss: {},
		'postcss-preset-env': {
			features: {'nesting-rules': false},
		},
		autoprefixer: {},
	},
};
