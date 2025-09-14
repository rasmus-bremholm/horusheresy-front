import styles from "../legions.module.scss";
import card from "../../components/Card.module.scss";
import getLegion from "../../lib/getLegion";
import { LegionApiResponse } from "@/app/lib/types";
import { IM_Fell_English, IM_Fell_English_SC } from "next/font/google";
import Divider from "@/app/components/Divider";
import PrimarchPortrait from "@/app/components/PrimarchPortrait";
import getSuffix from "@/app/lib/getSuffix";

import type { Metadata } from "next";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params;
	const response: LegionApiResponse = await getLegion(id);

	const { legionInfo, primarch, characters } = response.data;

	return {
		title: `${legionInfo.name} - Horus Heresy API`,
		description: legionInfo.description?.substring(0, 160) + "...",
		openGraph: {
			title: `${legionInfo.name} - The ${legionInfo.id}${getSuffix(parseInt(legionInfo.id))} Legion`,
			description: legionInfo.description,
			url: `https://horus-heresy-next.vercel.app/legions/${id}`,
			images: `/api/og?legion=${legionInfo.name}&number=${legionInfo.id}`,
			siteName: "Horus Heresy API",
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${legionInfo.name} - Horus Heresy API`,
			description: legionInfo.description?.substring(0, 160) + "...",
			images: [`/api/og?legion=${legionInfo.name}&number=${legionInfo.id}`],
		},
	};
}

export default async function LegionDetails({ params }: PageProps) {
	const { id } = await params;
	const response: LegionApiResponse = await getLegion(id);

	const { legionInfo, primarch, characters } = response.data;

	return (
		<main className={`${styles.legionMain} ${fellEnglish.variable} ${fellEnglishSC.variable}`}>
			<section className={styles.gridWrapper}>
				<header className={styles.legionHeader}>
					<h1>{legionInfo.name}</h1>
					<Divider />
				</header>
				<div className={styles.legionInfo}>
					<div className={styles.quickInfoWrapper}>
						<h2>Legion</h2>
						<span>Homeworld:</span>
						<span>{legionInfo.homeworld}</span>
						<span>Allegiance:</span>
						<span>{legionInfo.traitor ? "Traitor" : "Loyalist"}</span>
						<span>Army Size:</span>
						<span>{legionInfo.size}</span>
					</div>
					<div>
						<h2>Description</h2>
						{legionInfo.description}
					</div>
					<Divider />
				</div>
				{primarch && (
					<div className={styles.primarchInfo}>
						<h3>Primarch</h3>
						<PrimarchPortrait height={300} width={300} alt='test' image={`/primarchs/${legionInfo.id}.png`} />
						<h2>{primarch.name}</h2>
						<p>{primarch.description}</p>
						<p>
							Discovered: {primarch.discovery_order}
							{getSuffix(primarch.discovery_order)}
						</p>
					</div>
				)}
				{characters && (
					<section className={styles.charactersInfo}>
						<h2>Characters</h2>
						<div className={styles.wrapper}>
							{characters.slice(0, 4).map((character) => (
								<div key={character.id} className={card.characterCard}>
									<h4>{character.name}</h4>
									<p>{character.title}</p>
									<p>{character.rank}</p>
									<p>{character.notable_for}</p>
								</div>
							))}
						</div>
					</section>
				)}
			</section>
		</main>
	);
}
