import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";
import { types } from "sass";
import { TypedObject } from "sanity";
import type { DocPage } from "../lib/types";

interface DocPageProps {
	docpage: DocPage;
}

export default function DocPage({ docpage }: DocPageProps) {
	const { title, content } = docpage;

	const components = {
		types: {
			code: ({ value }) => (
				<pre style={{ background: "#f4f4f4", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
					<code className={`language-${value.language}`}>{value.code}</code>
				</pre>
			),
		},
	};

	return (
		<section>
			<div>
				<h2>{title}</h2>
				<div>
					<PortableText value={content} components={components} />
				</div>
			</div>
		</section>
	);
}
