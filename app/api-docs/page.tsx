import styles from "./api-docs.module.scss";
import { AllContentQuery } from "../lib/types";
import { DOC_NEWS_ENDPOINT_QUERY } from "../lib/queries";
import { client } from "../lib/sanity";
import EndPoint from "../components/EndPoint";
import DocPage from "../components/DocPage";
import Divider from "../components/Divider";
import { Metadata } from "next";
import { ApiSchemas } from "../components/ApiSchemas";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "API Documentation -  Horus Heresy API",
		description: "Learn about the different endpoints and parameters available for the Horus Heresy API",
		openGraph: {
			title: "API Documentation -  Horus Heresy API",
			description: "Learn about the different endpoints and parameters available for the Horus Heresy API",
			url: "https://horus-heresy-next.vercel.app/api-docs",
			siteName: "Horus Heresy API",
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary",
			title: "API Documentation -  Horus Heresy API",
			description: "Learn about the different endpoints and parameters available for the Horus Heresy API",
		},
	};
}

export default async function Apidocs() {
	const data: AllContentQuery = await client.fetch(DOC_NEWS_ENDPOINT_QUERY, {}, { next: { revalidate: 30 } });

	return (
		<>
			<ApiSchemas
				type='api-docs'
				data={{
					title: "API Documentation - Horus Heresy API",
					description: "The complete REST API documentation for Horus Heresy data",
					url: "https://horus-heresy-next.vercel.app/api-docs",
					breadcrumbs: [
						{ name: "Home", url: "https://horus-heresy-next.vercel.app" },
						{ name: "API Documentation", url: "https://horus-heresy-next.vercel.app/api-docs" }
					]
				}}
			/>
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
		</>
	);
}
