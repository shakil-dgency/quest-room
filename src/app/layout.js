import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/templet/thrillTheme/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
	title: "Project Minotaur Escape Room",
	description: "So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill",
	openGraph: {
		images: [
			"https://questroom-app-onzmd.ondigitalocean.app/templet/thrillTheme/thumbnail.jpg",
		],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
