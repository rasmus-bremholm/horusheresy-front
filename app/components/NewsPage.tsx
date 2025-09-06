import { PortableText } from "next-sanity";
import styles from "../api-docs/api-docs.module.scss";
import { TypedObject } from "sanity";
import { NewsItem } from "../lib/types";

// We want some kind of max height for the news section. And it should expand when clicked on.
// We also need a border around ech news article.
// Text needs too fade out when overflowing.

interface NewsPageProps {
	news: NewsItem[];
}

export default function NewsPage({ news }: NewsPageProps) {
	const latestNews = news[0];
	const olderNews = news.slice(1);

	return (
		<section className={styles.newsSection}>
			<h2>NEWS</h2>
			{latestNews && (
				<div>
					<h3>{latestNews.title}</h3>
					<PortableText value={latestNews.content} />
				</div>
			)}
			{olderNews.length > 0 && (
				<details>
					<summary>View all news</summary>
					{olderNews.map((item) => (
						<div key={item._id}>
							<h4>{item.title}</h4>
							<PortableText value={item.content} />
						</div>
					))}
				</details>
			)}
		</section>
	);
}

//
