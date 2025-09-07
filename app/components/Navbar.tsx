import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<Image src='/hh-logo_light.png' width={474 / 3} height={106 / 3} alt='Horus Heresy Logo' />
			</Link>
			<Link href='/legions'>
				<div className={styles.navbarLinks}>EXAMPLES</div>
			</Link>
			<Link href='/api-docs'>
				<div className={styles.navbarLinks}>API</div>
			</Link>
			<Link href='/news'>
				<div className={styles.navbarLinks}>NEWS</div>
			</Link>
		</nav>
	);
}
