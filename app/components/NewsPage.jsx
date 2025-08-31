import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";

export default function NewsPage({ news }) {
	const latestNews = news[0];
	const olderNews = news.slice(1);

	return (
		<section>
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
						<div>
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
