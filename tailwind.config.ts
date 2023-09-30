import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFA4CF",
				background: "#000",
				foreground: "#E7E9EA",
				"muted-foreground": "#71767b",
			},
		},
	},
	plugins: [],
};
export default config;
