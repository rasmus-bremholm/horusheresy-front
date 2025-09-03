import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({ id, name, url }) {
	return (
		<div className={styles.card}>
			<h2 className={styles.legionName}>{name}</h2>
			<p className={styles.legionNumber}>{id}</p>
			<div className={styles.legionImageContainer}>
				<Image className={styles.legionImage} src={`/primarchs/${id}.jpg`} fill={true} alt={name} />
			</div>
		</div>
	);
}
