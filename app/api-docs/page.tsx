import styles from "./api-docs.module.scss";
import { NewsItem, ApiEndPoint, AllContentQuery } from "../lib/types";
import { DOC_NEWS_ENDPOINT_QUERY } from "../lib/queries";
import { client } from "../lib/sanity";
import EndPoint from "../components/EndPoint";
import DocPage from "../components/DocPage";
import NewsPage from "../components/NewsPage";

export default async function Apidocs() {
	const data: AllContentQuery = await client.fetch(DOC_NEWS_ENDPOINT_QUERY, {}, { next: { revalidate: 30 } });

	console.log(data);

	return (
		<main className={styles.main}>
			<div className={styles.endpointContainer}>
				{data.docPages[0] && <DocPage docpage={data.docPages[0]} />}
				<hr />
				{data.news.length > 0 && <NewsPage news={data.news} />}
				{data.docPages[1] && <DocPage docpage={data.docPages[1]} />}
				<hr />
				{data.endpoints.map((endpoint) => (
					<EndPoint key={endpoint._id} endpoint={endpoint} />
				))}
				<hr />
			</div>
		</main>
	);
}
