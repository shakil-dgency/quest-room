import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import { Providers } from "@/lib/Providers";
import Footer from "@/components/Footer/Footer";

const bandexFont = localFont({
	src: "../../public/fonts/BANDEX.ttf", // Correct path
	display: "swap", // Optional but recommended for better UX
	variable: "--font-bandex",
});

const rusoileFont = localFont({
	src: "../../public/fonts/Rusoile-Grunge.woff2", // Correct path
	display: "swap", // Optional but recommended for better UX
	variable: "--font-rusoile",
});

export const metadata = {
	title: "Project Minotaur Escape Room",
	description:
		"So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill",
	openGraph: {
		images: ["https://questroom-app-onzmd.ondigitalocean.app/templet/thrillTheme/meta_image.jpg"],
	},
};
export const viewport = {
	width: "device-width",
	minimumScale: 1,

	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preload" href="/fonts/Rusoile-Grunge.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
				<link rel="preload" href="/fonts/BANDEX.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
				<link rel="icon" href="/favicon.svg" type="image/x-icon" sizes="32X30" />
			</head>
			<body className={`${bandexFont.variable} ${rusoileFont.variable}  antialiased`}>
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
