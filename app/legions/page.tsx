import Link from "next/link";
import Card from "../components/Card";
import getLegions from "../lib/getLegions";
import styles from "./legions.module.scss";

export const metadata = {
	title: "Horus Heresy API Examples",
	description: "Welcome to the Horus Heresy API. A restful API for everything Horus Heresy!",
};

export default async function Legions() {
	const legions = await getLegions();
	legions.sort((a, b) => a.id - b.id);

	return (
		<main className={styles.main}>
			<h1>Legions Page</h1>
			<p>
				Here you will find all the active legions beeing used from the API For moore info on how this was achived, please visit the{" "}
				<Link href='/api-docs'>API Documentation.</Link>
			</p>
			<section className={styles.cardSection}>
				{legions.map((legion) => (
					<Link key={legion.id} href={`/legions/${legion.id}`}>
						<Card key={legion.id} id={legion.id} name={legion.name} />
					</Link>
				))}
			</section>
		</main>
	);
}
