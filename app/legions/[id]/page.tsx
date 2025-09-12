import styles from "../legions.module.scss";
import getLegion from "../../lib/getLegion";
import Image from "next/image";
import { LegionApiResponse } from "@/app/lib/types";
import { IM_Fell_English, IM_Fell_English_SC } from "next/font/google";
import Divider from "@/app/components/Divider";
import PrimarchPortrait from "@/app/components/PrimarchPortrait";
import getSuffix from "@/app/lib/getSuffix";

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
						{characters.slice(0, 3).map((character) => (
							<div key={character.id}>
								<h4>{character.name}</h4>
								<p>{character.title}</p>
							</div>
						))}
					</section>
				)}
			</section>
		</main>
	);
}

// className={styles.fontHeading}
//public\primarchs\3.png
