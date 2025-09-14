export const dynamic = "force-dynamic";

import Link from "next/link";
import Card from "../components/Card";
import getLegions from "../lib/getLegions";
import styles from "./legions.module.scss";
import { IM_Fell_English, IM_Fell_English_SC } from "next/font/google";
import type { Metadata } from "next";
import { ApiSchemas } from "../components/ApiSchemas";

const fellEnglish = IM_Fell_English({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fell-english",
});

const fellEnglishSC = IM_Fell_English_SC({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fell-english-sc",
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Legions of the Horus Heresy -  Horus Heresy API",
		description: "Here you will find examples of the API in use, used to generate the pages of all the different legions during the Horus Heresy",
		openGraph: {
			title: "Legions of the Horus Heresy -  Horus Heresy API",
			description: "All Legions, using the Horus Heresy API",
			url: "https://horus-heresy-next.vercel.app/legions/",
			siteName: "Horus Heresy API",
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary",
			title: "Legions of the Horus Heresy -  Horus Heresy API",
			description: "Legions Examples, using the Horus Heresy API",
		},
	};
}

export default async function Legions() {
	const legions = await getLegions();
	legions?.sort((a, b) => parseInt(a.id) - parseInt(b.id));

	return (
		<>
			<ApiSchemas
				type='example'
				data={{
					title: "Space Marine Legions Examples",
					description: "Complete list of all 20 Space Marine Legions from the Horus Heresy era",
					url: "https://horus-heresy-next.vercel.app/legions",
				}}
			/>
			<main className={`${styles.main} ${fellEnglish.variable} ${fellEnglishSC.variable}`}>
				<h1>Legions Page</h1>
				<p>
					Here you will find all the active legions being used from the API. For more info on how this was achieved, please visit the{" "}
					<Link href='/api-docs'>API Documentation.</Link>
				</p>
				<section className={styles.cardSection}>
					{legions.map((legion) => (
						<Link key={legion.id} href={`/legions/${legion.id}`}>
							<Card id={legion.id} name={legion.name} />
						</Link>
					))}
				</section>
			</main>
		</>
	);
}
