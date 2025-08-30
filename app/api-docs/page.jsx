import styles from "./api-docs.module.scss";
import Sidebar from "./Sidebar";
import Code from "../components/Code";

import Link from "next/link";

import { ALL_ENDPOINTS_QUERY } from "../lib/queries";
import { client } from "../lib/sanity";
import EndPoint from "../components/EndPoint";

export default async function Apidocs() {
	const data = await client.fetch(ALL_ENDPOINTS_QUERY, {}, { next: { revalidate: 30 } });

	console.log(data);

	return (
		<main className={styles.main}>
			<div className={styles.endpointContainer}>
				{data.map((endpoint) => (
					<EndPoint key={endpoint._id} endpoint={endpoint} />
				))}
				<hr />
			</div>
		</main>
	);
}
