module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				lila: "#d6bfff",
				rosa: "#ffbfe2",
				amarillo: "#f9ffbf",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
