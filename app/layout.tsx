import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
}

export const metadata = {
	title: "Horus Heresy API | By Rasmus Bremholm",
	description: "Welcome to the Horus Heresy API. A restful API for everything Horus Heresy!",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Analytics />
				<Divider />
				<Footer />
			</body>
		</html>
	);
}
