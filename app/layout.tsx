import { Inter, IM_Fell_English, IM_Fell_English_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: "Horus Heresy API - By Rasmus Bremholm",
		template: "%s | Horus Heresy API",
	},
	description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API. Explore all 20 Space Marine Legions, primarchs, characters, and battles.",
	keywords: ["Horus Heresy", "Warhammer 40K", "Space Marines", "API", "Database", "Legions"],
	authors: [{ name: "Rasmus Bremholm" }],
	openGraph: {
		title: "Horus Heresy API - By Rasmus Bremholm",
		description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API",
		url: "https://horus-heresy-next.vercel.app",
		siteName: "Horus Heresy API",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Horus Heresy API",
		description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API",
	},
	robots: {
		index: true,
		follow: true,
	},
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
