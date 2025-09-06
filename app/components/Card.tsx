import styles from "./Card.module.scss";
import Image from "next/image";

interface CardProps {
	id: number;
	name: string;
}

export default function Card({ id, name }: CardProps) {
	return (
		<div className={styles.card}>
			<h2 className={styles.legionName}>{name}</h2>
			<p className={styles.legionNumber}>{id}</p>
			<div className={styles.legionImageContainer}>
				{id === 2 || id === 11 ?
					<Image className={styles.expunged} src={"/icons/seal.png"} height={256} width={256} alt='seal exponged' />
				:	<Image className={styles.legionImage} src={`/icons/${id}.png`} height={256} width={256} alt={name} />}
			</div>
		</div>
	);
}
