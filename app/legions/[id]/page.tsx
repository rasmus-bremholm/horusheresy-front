import styles from "../legions.module.scss";
import getLegion from "../../lib/getLegion";
import Image from "next/image";
import { LegionApiResponse } from "@/app/lib/types";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function LegionDetails({ params }: PageProps) {
	const { id } = await params;
	const response: LegionApiResponse = await getLegion(id);

	const { legionInfo, primarch, characters } = response.data;

	return (
		<main className={styles.legionMain}>
			<div className={styles.legionContainer}>
				<h1>{legionInfo.name}</h1>
				<p>{legionInfo.description}</p>
				<div className={styles.infoContainer}>
					<div className={styles.info}>Homeworld: {legionInfo.homeworld}</div>
					<div className={styles.info}>Army Size: {legionInfo.size}</div>
					<div className={styles.info}>Primarch: {primarch.name}</div>
				</div>
			</div>
			{legionInfo.image && (
				<div className={styles.imageContainer}>
					<Image src={legionInfo.image} width={400} height={400} alt={primarch.name} />
				</div>
			)}
		</main>
	);
}
