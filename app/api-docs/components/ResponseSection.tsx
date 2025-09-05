"use client";
import styles from "../api-docs.module.scss";
import type { ApiResponse } from "../../lib/types";
import Code from "../../components/Code";

interface ResponseProps {
	response: ApiResponse;
}

export default function ResponseSection({ response }: ResponseProps) {
	return (
		<article key={response.statusCode}>
			<div className={styles.responseHeader}>
				<span className={`styles.statusCode status-${Math.floor(response.statusCode / 100)}xx`}>{response.statusCode}</span>
				<span className={styles.responseDescription}>{response.description}</span>
			</div>
			{response.example && (
				<div className={styles.responseExample}>
					<Code text={response.example.code} language={"json"} />
				</div>
			)}
		</article>
	);
}
