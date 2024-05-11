/** @type {import('tailwindcss').Config} */
export default {
	content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			primaryRegular: ["Regular", "Arial"],
			primaryMedium: ["Medium", "Arial"],
		},
		extend: {
			colors: {
				"navy-blue": "#5F9CC8",
				"bright-rose": "#FF4583",
			},
			boxShadow: {
				"md-2": "0 4px 2px -1px rgb(0 0 0 / 0.15), 2px 0px 2px 2px rgb(0 0 0 / 0.1)",
				btn: "0 2px 5px 0 rgba(0, 0, 0, .5);",
			},
			letterSpacing: {
				widest: ".125em",
			},
		},
	},
	plugins: ["@tailwindcss/typography"],
};
