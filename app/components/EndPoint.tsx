import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";
import { ApiEndPoint } from "../lib/types";
import Code from "./Code";

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
				{/* Fun Facts Section */}
				{funfacts && (
					<section className={styles.funfactContainer}>
						<h3>Fun Facts:</h3>
						<PortableText value={funfacts} />
					</section>
				)}
				{/* Parameters Section */}
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
				{/* Responses Section */}
				<section>
					<h3>Responses</h3>
					{responses?.map((response) => (
						<article key={response.statusCode}>
							<div className={styles.responseHeader}>
								<span className={`statusCode status-${Math.floor(response.statusCode / 100)}xx`}>{response.statusCode}</span>
								<span className={styles.responseDescription}>{response.description}</span>
							</div>
							{response.example && (
								<div className={styles.responseExample}>
									<Code text={response.example.code} language={response.example.language}/>
								</div>
							)}
						</article>
					))}
				</section>

			</div>
			<Divider />
		</>
	);
}

//
