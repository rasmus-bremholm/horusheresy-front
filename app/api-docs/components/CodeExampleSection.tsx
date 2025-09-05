"use client";
import styles from "../api-docs.module.scss";
import type { CodeExample } from "../../lib/types";
import Code from "../../components/Code";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface ExampleProps {
	example: CodeExample;
}

export default function CodeExampleSection({ example }: ExampleProps) {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<article key={example.title} className={styles.article} onClick={toggleOpen}>
			<div className={styles.exampleHeader}>
				<span>{example.title}</span>
				<span>{example.language}</span>
				<div className={styles.expandIcons}>
					{open ?
						<ExpandLess />
					:	<ExpandMore />}
				</div>
			</div>
			{open && (
				<div className={styles.codeExample}>
					<Code text={example.code} language={example.language} />
				</div>
			)}
		</article>
	);
}
