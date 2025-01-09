/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		// added custom break points for small device
		screens: {
			"2xs": { min: "400px" },
			xs: { min: "475px" },
			sm: { min: "640px" },
			md: { min: "768px" },
			lg: { min: "1024px" },
			xl: { min: "1280px" },
			"2xl": { min: "1536px" },
		},
	},
	plugins: [],
};
