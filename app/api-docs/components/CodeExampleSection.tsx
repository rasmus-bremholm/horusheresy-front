"use client";
import styles from "../api-docs.module.scss";
import type { CodeExample } from "../../lib/types";
import Code from "../../components/Code";

interface ExampleProps {
	example: CodeExample;
}

export default function CodeExampleSection({ example }: ExampleProps) {
	return (
		<article key={example.title}>
			<div className={styles.exampleHeader}>
				<span>{example.title}</span>
				<span>{example.language}</span>
			</div>
			<div>
				<Code text={example.code} language={example.language} />
			</div>
		</article>
	);
}
