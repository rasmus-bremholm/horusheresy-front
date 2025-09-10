import styles from "../legions.module.scss";
import getLegion from "../../lib/getLegion";
import Image from "next/image";
import { LegionApiResponse } from "@/app/lib/types";
import { IM_Fell_English, IM_Fell_English_SC } from "next/font/google";
import Divider from "@/app/components/Divider";
import fs from "fs";
import path from "path";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

// In your component

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
				<div className={styles.primarchInfo}>
					<h3>Primarch</h3>
					<Image height={350} width={350} src={`/public/primarchs/${primarch.id}.png`} alt={`${primarch.name} portrait`} />
					<h2>{primarch.name}</h2>
					<p>{primarch.description}</p>
				</div>
				<section className={styles.charactersInfo}>
					<h2>Characters</h2>characterInfo
				</section>
			</section>
		</main>
	);
}

// className={styles.fontHeading}
//public\primarchs\3.png
