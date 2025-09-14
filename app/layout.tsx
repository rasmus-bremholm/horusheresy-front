import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { ApiSchemas } from "./components/ApiSchemas";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	metadataBase: new URL('https://horus-heresy-next.vercel.app'),
	title: {
		default: "Horus Heresy API - By Rasmus Bremholm",
		template: "%s | Horus Heresy API",
	},
	manifest: "/site.webmanifest",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "android-chrome",
				sizes: "192x192",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "android-chrome",
				sizes: "512x512",
				url: "/android-chrome-512x512.png",
			},
		],
	},
	description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API. Explore all 20 Space Marine Legions, primarchs, characters, and battles.",
	keywords: ["Horus Heresy", "Warhammer 40K", "Space Marines", "API", "Database", "Legions"],
	authors: [{ name: "Rasmus Bremholm" }],
	openGraph: {
		title: "Horus Heresy API - By Rasmus Bremholm",
		description: "The ultimate Warhammer 30K Horus Heresy database and RESTful API",
		url: "https://horus-heresy-next.vercel.app",
		siteName: "Horus Heresy API",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/api/og",
				width: 1200,
				height: 630,
				alt: "Horus Heresy API - Warhammer 30K REST API",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Horus Heresy API",
		description: "The ultimate Warhammer 30K Horus Heresy database and RESTful API",
		images: ["/api/og"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<head>
				<ApiSchemas type='homepage' />
			</head>
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
