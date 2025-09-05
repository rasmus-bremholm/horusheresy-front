"use client";
import styles from "../api-docs.module.scss";
import type { Parameter } from "../../lib/types";

interface ParameterProps {
	parameter: Parameter;
}

export default function ParametersSection({ parameter }: ParameterProps) {
	return (
		<article className={styles.parameterItem}>
			<div className={styles.parameterHeader}>
				<code>{parameter.name}</code>
				<span className={styles.parameterType}>{parameter.type}</span>
				<span className={`styles.parameterBadge ${parameter.required ? "required" : "optional"}`}>{parameter.required ? "required" : "optional"}</span>
			</div>
			<div className={styles.parameterDescription}>{parameter.description}</div>
		</article>
	);
}
