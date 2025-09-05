"use client";
import styles from "../api-docs.module.scss";
import type { ApiResponse } from "../../lib/types";
import Code from "../../components/Code";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
interface ResponseProps {
	response: ApiResponse;
}

export default function ResponseSection({ response }: ResponseProps) {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<article key={response.statusCode} className={styles.article}>
			<div className={styles.responseHeader} onClick={toggleOpen}>
				<span className={`${styles.statusCode} ${styles["status" + Math.floor(response.statusCode / 100) + "xx"]}`}>{response.statusCode}</span>
				<span className={styles.responseDescription}>{response.description}</span>
				<div className={styles.expandIcons}>
					{open ?
						<ExpandLess />
					:	<ExpandMore />}
				</div>
			</div>
			{response.example && open && (
				<div className={styles.responseExample}>
					<Code text={response.example.code} language={"json"} />
				</div>
			)}
		</article>
	);
}
