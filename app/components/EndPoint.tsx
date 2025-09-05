import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";
import { ApiEndPoint } from "../lib/types";

interface EndPointProps {
	endpoint: ApiEndPoint;
}

export default function EndPoint({ endpoint }: EndPointProps) {
	const { title, method, path, description, funfacts, parameters, responses, codeExamples } = endpoint;

	return (
		<>
			<div>
				<h2>{title}</h2>
				<div>
					<h3 className={styles.method}>{method}</h3>
					<h3 className={styles.method}>{path}</h3>
				</div>

				<div>
					<PortableText value={description} />
				</div>
				{funfacts && (
					<div className={styles.funfactContainer}>
						<h3>Fun Facts:</h3>
						<PortableText value={funfacts} />
					</div>
				)}
				{parameters && (
					<section>
						<h3>Parameters</h3>
						{parameters.map((param) => (
							<article key={param.name} className={styles.parameterItem}>
								<div className={styles.parameterHeader}>
									<code>{param.name}</code>
									<span className={styles.parameterType}>{param.type}</span>
									<span className={`parameterBadge ${param.required ? "required" : "optional"}`}>
										{param.required ? "required" : "optional"}
									</span>
								</div>
								<div className={styles.parameterDescription}>{param.description}</div>
							</article>
						))}
					</section>
				)}
			</div>
			<Divider />
		</>
	);
}

//
