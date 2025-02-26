/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				navcard_bg: "#000A19",
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				black: "#000000",
				primary: {
					50: "#FFF1E6",
					100: "#FEE2CD",
					200: "#FEC59A",
					300: "#FDAB6D",
					400: "#FD8F3A",
					500: "#FC7008",
					600: "#CF5B03",
					700: "#9C4502",
					800: "#652C01",
					900: "#321601",
					950: "#190B00",
				},
				secondary: {
					50: "#DBE4FA",
					100: "#B3C6F4",
					200: "#6C90E9",
					300: "#2156DE",
					400: "#163B97",
					500: "#0B1D4B",
					600: "#09183E",
					700: "#07112C",
					800: "#050C1F",
					900: "#02050D",
					950: "#010309",
				},
				accent: {
					50: "#DBE9FF",
					100: "#B3D0FF",
					200: "#66A1FF",
					300: "#1A71FF",
					400: "#004ECC",
					500: "#003180",
					600: "#002766",
					700: "#001D4D",
					800: "#001433",
					900: "#000A19",
					950: "#00060F",
				},
				text: {
					50: "#FCFCFC",
					100: "#F7F7F7",
					200: "#F0F0F0",
					300: "#E8E8E8",
					400: "#E0E0E0",
					500: "#D9D9D9",
					600: "#ADADAD",
					700: "#828282",
					800: "#575757",
					900: "#2B2B2B",
					950: "#171717",
				},
				grayscale: {
					50: "#F5F5F5",
					100: "#EDEDED",
					200: "#D9D9D9",
					300: "#BFBFBF",
					400: "#A3A3A3",
					500: "#808080",
					600: "#737373",
					700: "#666",
					800: "#545454",
					900: "#383838",
					950: "#262626",
				},
				family: {
					50: "#D2FEE7",
					100: "#ABFDD1",
					200: "#56FAA3",
					300: "#07F375",
					400: "#049F4C",
					500: "#024923",
					600: "#023C1D",
					700: "#012D16",
					800: "#011E0E",
					900: "#000F07",
					950: "#000502",
				},
				corporate: {
					50: "#EEF6FC",
					100: "#E1F0FA",
					200: "#BEDEF3",
					300: "#49A3DE",
					400: "#52A7E0",
					500: "#1D6EA4",
					600: "#11405F",
					700: "#0B293D",
					800: "#071A27",
					900: "#040F16",
					950: "#020609",
				},
				team: {
					50: "#F0DBFF",
					100: "#DFB3FF",
					200: "#BF66FF",
					300: "#9F1AFF",
					400: "#70C",
					500: "#4B0082",
					600: "#3B0066",
					700: "#2D004D",
					800: "#1E0033",
					900: "#0F0019",
					950: "#09000F",
				},
				bachelor: {
					50: "#F8F1F2",
					100: "#F1E4E6",
					200: "#E2C5C9",
					300: "#D5AAB0",
					400: "#C58B94",
					500: "#B76E79",
					600: "#6D363E",
					700: "#412025",
					800: "#251315",
					900: "#1B0E10",
					950: "#030202",
				},
				school: {
					50: "#EEFCFC",
					100: "#E1F9F9",
					200: "#C0F2F2",
					300: "#A2ECEC",
					400: "#84E6E6",
					500: "#64DFDF",
					600: "#166262",
					700: "#0B4343",
					800: "#061E1E",
					900: "#041515",
					950: "#000",
				},
			},
		},
		// added custom break points for small device
		screens: {
			"3xs": { min: "360px" },
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
