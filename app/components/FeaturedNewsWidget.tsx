import { client } from "../lib/sanity";
import { NewsItem } from "../lib/types";
import Link from "next/link";
import { PortableText } from "next-sanity";
import styles from "@/app/page.module.scss";

export default async function FeaturedNewsWidget() {
	const featuredNews: NewsItem = await client.fetch(`
      *[_type == "newsArticle" && featured] | order(publishedAt desc)[0]`);

	if (!featuredNews) {
		return null;
	}

	const snippetComponents = {
		block: {
			normal: ({ children }: any) => <span>{children}</span>,
		},
		marks: {
			// Strip all formatting for the snippet
			strong: ({ children }: any) => <>{children}</>,
			em: ({ children }: any) => <>{children}</>,
			link: ({ children }: any) => <>{children}</>,
		},
	};

	// Type guard to check if content is an array
	const contentArray = Array.isArray(featuredNews.content) ? featuredNews.content : [];
	const contentPreview = contentArray.slice(0, 2);

	return (
		<Link href='/news' className={styles.readMore}>
			<div className={styles.featuredNews}>📢 {featuredNews.title}</div>
		</Link>
	);
}
