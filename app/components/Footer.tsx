import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>Horus Heresy API | Made by Rasmus Bremholm</h2>
			<p>
				Everything belongs to Games Workshop, seriously dont sue me, it's just a
				hobby project. This API will never earn me any money and will always
				remain free, it might cost me money though.
			</p>
			<p>
				Visit / Contact me :{" "}
				<a href='https://rasmusbremholm.com'>Rasmus Bremholm</a>
			</p>
		</footer>
	);
}
