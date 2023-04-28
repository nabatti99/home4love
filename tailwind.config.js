const colors = require("./src/lib/global/tailwind-config/colors.config");
const screens = require("./src/lib/global/tailwind-config/screens.config");
const { fontFamily } = require("./src/lib/global/tailwind-config/typography.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors,
		fontFamily,
		screens,
		extend: {},
	},
	plugins: [],
};
