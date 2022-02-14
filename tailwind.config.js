module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			"sans-serif": ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				primary: {
					dark: "#111e26",
					DEFAULT: "#233d4d",
				},
			},
			transitionDuration: {
				0: "0ms",
			},
		},
	},
	plugins: [],
};
