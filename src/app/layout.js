import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "@/components/templet/thrillTheme/NavBar";

const bandexFont = localFont({
  src: '../../public/fonts/BANDEX.ttf', // Correct path
  display: 'swap', // Optional but recommended for better UX
  variable: '--font-bandex',
});

const rusoileFont = localFont({
  src: '../../public/fonts/Rusoile-Grunge.ttf', // Correct path
  display: 'swap', // Optional but recommended for better UX
  variable: '--font-rusoile',
});


export const metadata = {
	title: "Project Minotaur Escape Room",
	description: "So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill",
	openGraph: {
		images: [
			"https://questroom-app-onzmd.ondigitalocean.app/templet/thrillTheme/meta_image.jpg",
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
        className={`${bandexFont.variable} ${rusoileFont.variable}  antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
