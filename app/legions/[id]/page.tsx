import styles from "../legions.module.scss";
import getLegion from "../../lib/getLegion";
import Image from "next/image";
import { LegionApiResponse } from "@/app/lib/types";
import { IM_Fell_English, IM_Fell_English_SC } from "next/font/google";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

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

export default async function LegionDetails({ params }: PageProps) {
	const { id } = await params;
	const response: LegionApiResponse = await getLegion(id);

	const { legionInfo, primarch, characters } = response.data;

	return (
		<main className={`${styles.legionMain} ${fellEnglish.variable} ${fellEnglishSC.variable}`}>
			<section className={styles.gridWrapper}>
				<header className={styles.legionHeader}>
					<h1 className={styles.fontHeading}>{legionInfo.name}</h1>
				</header>
				<div className={styles.legionInfo}>
					<h2 className={styles.fontHeading}>Legion</h2>
				</div>
				<aside className={styles.primarchInfo}>
					<h3 className={styles.fontHeading}>Primarch</h3>
					<h2 className={styles.fontHeading}>{primarch.name}</h2>
					<p>{primarch.description}</p>
				</aside>
				<section className={styles.charactersInfo}>
					<h2 className={styles.fontHeading}>Characters</h2>characterInfo
				</section>
			</section>
		</main>
	);
}

// className={styles.fontHeading}
