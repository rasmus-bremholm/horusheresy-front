import { PortableText } from "next-sanity";
import Divider from "./Divider";
import styles from "../api-docs/api-docs.module.scss";
import { TypedObject } from "sanity";
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
			</div>
			<Divider />
		</>
	);
}

//
