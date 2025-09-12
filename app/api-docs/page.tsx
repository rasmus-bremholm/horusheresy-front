import styles from "./api-docs.module.scss";
import { AllContentQuery } from "../lib/types";
import { DOC_NEWS_ENDPOINT_QUERY } from "../lib/queries";
import { client } from "../lib/sanity";
import EndPoint from "../components/EndPoint";
import DocPage from "../components/DocPage";
import Divider from "../components/Divider";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "API Documentation -  Horus Heresy API",
		description: "Learn about the different endpoints and paramters avalible for the Horus Heresy API",
		openGraph: {
			title: "API Documentation -  Horus Heresy API",
			description: "Learn about the different endpoints and parameters avalible for the Horus Heresy API",
			url: "https://horus-heresy-next.vercel.app/legions/",
			siteName: "Horus Heresy API",
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary",
			title: "API Documentation -  Horus Heresy API",
			description: "Learn about the different endpoints and parameters avalible for the Horus Heresy API",
		},
	};
}

export default async function Apidocs() {
	const data: AllContentQuery = await client.fetch(DOC_NEWS_ENDPOINT_QUERY, {}, { next: { revalidate: 30 } });

	console.log(data);

	return (
		<main className={styles.main}>
			<div className={styles.endpointContainer}>
				{data.docPages[0] && <DocPage docpage={data.docPages[0]} />}
				<Divider />
				{data.docPages[1] && <DocPage docpage={data.docPages[1]} />}
				<Divider />
				{data.endpoints.map((endpoint) => (
					<EndPoint key={endpoint._id} endpoint={endpoint} />
				))}
				<hr />
			</div>
		</main>
	);
}
