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
					darker: "#19212b",
					dark: "#223140",
					DEFAULT: "#324156",
				},
				secondary: {
					dark: "#923b25",
					DEFAULT: "#c35532",
				},
			},
			transitionDuration: {
				0: "0ms",
			},
			rotate: {
				135: "135deg",
			},
		},
	},
	plugins: [],
};
