import { PortableText } from "next-sanity";
import styles from "../api-docs/api-docs.module.scss";
import { NewsItem } from "../lib/types";
import Divider from "./Divider";

interface NewsPageProps {
	news: NewsItem[];
}

export default function NewsArticle({ news }: NewsPageProps) {
	return (
		<section className={styles.newsSection}>
			{news.length > 0 &&
				news.map((item) => (
					<article key={item._id}>
						<div className={styles.newsHeader}>
							<h4>{item.title}</h4>
							<time className={styles.time}>{new Date(item.publishedAt).toLocaleDateString()}</time>
						</div>
						<PortableText value={item.content} />
						<Divider />
					</article>
				))}
		</section>
	);
}
