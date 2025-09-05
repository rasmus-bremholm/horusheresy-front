import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";
import { ApiEndPoint } from "../lib/types";

import FunFacts from "../api-docs/components/FunFactsSection";
import ParametersSection from "../api-docs/components/ParametersSection";
import ResponseSection from "../api-docs/components/ResponseSection";
import CodeExampleSection from "../api-docs/components/CodeExampleSection";

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
				{funfacts && <FunFacts funfacts={funfacts} />}
				{/* Parameters Section */}
				{parameters && (
					<section>
						<h3>Parameters</h3>
						{parameters.map((param) => (
							<ParametersSection parameter={param} key={param.name} />
						))}
					</section>
				)}
				{/* Responses Section */}
				<section>
					<h3>Responses</h3>
					{responses?.map((response) => (
						<ResponseSection response={response} key={response.statusCode} />
					))}
				</section>
				{/* Examples Section */}
				{codeExamples && (
					<section>
						<h3>Code Examples</h3>
						{codeExamples.map((example) => (
							<CodeExampleSection example={example} key={example.title} />
						))}
					</section>
				)}
			</div>
			<Divider />
		</>
	);
}

//
