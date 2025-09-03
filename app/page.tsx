import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Divider from "./components/Divider";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>
					<h1 className={styles.heading1}>Welcome to the Horus Heresy API</h1>
					<p className={styles.subHeading1}>
						A REST API by Rasmus Bremholm. The API provides useful information about both Loyalist and Traitor legion present during the Horus
						Heresy. Acess this data in your website, app or anything you can think of!
					</p>
				</div>
			</div>

			<div className={styles.buttons}>
				<Link href='/legions'>
					<div className={styles.button}>Examples</div>
				</Link>
				<Link href='/api-docs'>
					<div className={styles.button}>API Docs</div>
				</Link>
			</div>
			<Divider />
			<section className={styles.features}>
				<h2>Features</h2>
				<p>
					Here you can find all the different features of the API, find specific info you want about each of the Legiones Astartes. Don't forget to
					check out the{" "}
					<Link href='/api-docs'>
						<span className={styles.bold}>API documentation</span>
					</Link>{" "}
					for moore info and all the API endpoints.
				</p>
				<div className={styles.featuresGrid}>
					<FeatureCard cardTitle='Specific Legion' cardDesc='Get all info about a single legion by id.' cardImgUrl='/icons/Army.svg' />
					<FeatureCard cardTitle='All Legions' cardDesc='Get a list of all legions with all their details.' cardImgUrl='/icons/More Armies.svg' />
					<FeatureCard cardTitle='Primarch' cardDesc='Get the Primarch of each legion.' cardImgUrl='/icons/Leader.svg' />
					<FeatureCard cardTitle='Homeworld' cardDesc='Get the homeworld of your favorite legion.' cardImgUrl='/icons/Planet.svg' />
					<FeatureCard cardTitle='Army Size' cardDesc='Display the size of each legion.' cardImgUrl='/icons/Size.svg' />
					<FeatureCard cardTitle='Loyalty' cardDesc='Get all legions by allegence to The Emperor' cardImgUrl='/icons/Loyalist.svg' />
				</div>
			</section>
		</main>
	);
}
