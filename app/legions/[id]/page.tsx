import styles from "../legions.module.scss";
import getLegion from "../../lib/getLegion";
import Image from "next/image";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function LegionDetails({ params }: PageProps) {
	const { id } = await params;
	const legion = await getLegion(id);
	return (
		<main className={styles.legionMain}>
			<div className={styles.legionContainer}>
				<h1>{legion.name}</h1>
				<p>{legion.description}</p>
				<div className={styles.infoContainer}>
					<div className={styles.info}>Homeworld: {legion.homeworld}</div>
					<div className={styles.info}>Army Size: {legion.size}</div>
					<div className={styles.info}>Primarch: {legion.primarch}</div>
				</div>
			</div>
			{legion.image && (
				<div className={styles.imageContainer}>
					<Image src={legion.image} width={400} height={400} alt={legion.primarch} />
				</div>
			)}
		</main>
	);
}
