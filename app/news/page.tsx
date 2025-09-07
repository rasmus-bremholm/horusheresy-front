import { client } from "../lib/sanity";
import { NewsItem } from "../lib/types";
import styles from "../api-docs/api-docs.module.scss";
import NewsArticle from "../components/NewsArticle";

export default async function NewsPagePage() {
	const featuredNews: NewsItem[] = await client.fetch(`
  *[_type == "newsArticle" && featured == true] | order(publishedAt desc)
`);
	const regularNews: NewsItem[] = await client.fetch(`
  *[_type == "newsArticle" && featured != true] | order(publishedAt desc)
`);

	return (
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
	);
}
