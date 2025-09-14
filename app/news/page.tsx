import { client } from "../lib/sanity";
import { NewsItem } from "../lib/types";
import styles from "../api-docs/api-docs.module.scss";
import NewsArticle from "../components/NewsArticle";
import type { Metadata } from "next";
import { ApiSchemas } from "../components/ApiSchemas";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "News & Updates -  Horus Heresy API",
		description: "Latest project updates and new features for the Horus Heresy API",
		openGraph: {
			title: "News & Updates -  Horus Heresy API",
			description: "Latest project updates and new features for the Horus Heresy API",
			url: "https://horus-heresy-next.vercel.app/news",
			siteName: "Horus Heresy API",
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary",
			title: "News & Updates -  Horus Heresy API",
			description: "Latest project updates and new features for the Horus Heresy API",
		},
	};
}

export default async function NewsPagePage() {
	const featuredNews: NewsItem[] = await client.fetch(`
  *[_type == "newsArticle" && featured == true] | order(publishedAt desc)
`);
	const regularNews: NewsItem[] = await client.fetch(`
  *[_type == "newsArticle" && featured != true] | order(publishedAt desc)
`);

	const allNews = [...featuredNews, ...regularNews];

	return (
		<>
			<ApiSchemas
				type="news"
				data={{
					title: "News & Updates - Horus Heresy API",
					description: "Latest project updates and new features for the Horus Heresy API",
					url: "https://horus-heresy-next.vercel.app/news",
					newsItems: allNews
				}}
			/>
			<main className={styles.main}>
			<div className={styles.container}>
				<h1>News</h1>
				<div>
					<h2>Featured: </h2>
					{featuredNews.length > 0 && <NewsArticle news={featuredNews} />}
				</div>
				<div>
					<h2>Archive :</h2>
					{regularNews.length > 0 && <NewsArticle news={regularNews} />}
				</div>
			</div>
		</main>
		</>
	);
}
