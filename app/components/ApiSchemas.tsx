import type { EndpointInfo, DatasetInfo } from "../lib/schemas/apiSchemas";
import StructuredData from "./StructuredData";
import { generateApiSchema, generateOrganizationSchema, generateDatasetSchema, generateApiDocSchema, generateWebApiSchema } from "./StructuredData";

interface ApiSchemasProps {
	type: "homepage" | "api-docs" | "endpoint" | "dataset" | "example";
	data?: {
		title?: string;
		description?: string;
		url?: string;
		endpoint?: EndpointInfo;
		dataset?: DatasetInfo;
		[key: string]: any;
	};
}

export function ApiSchemas({ type, data = {} }: ApiSchemasProps) {
	const baseUrl = "https://horus-heresy-next.vercel.app";

	const getSchemas = () => {
		const schemas = [];

		// Always include organization schema
		schemas.push(generateOrganizationSchema());

		switch (type) {
			case "homepage":
				schemas.push(
					generateApiSchema({
						name: "Horus Heresy API",
						version: "1.0.3",
						description:
							"The ultimate Warhammer 40K Horus Heresy database and RESTful API. Explore all 20 Space Marine Legions, primarchs, characters, and battles.",
						baseUrl,
						documentation: `${baseUrl}/api-docs`,
						author: "Rasmus Bremholm",
					})
				);
				break;

			case "api-docs":
				schemas.push(
					generateApiDocSchema(
						data.title || "API Documentation - Horus Heresy API",
						data.description || "Complete API documentation for the Horus Heresy database",
						data.url || `${baseUrl}/api-docs`
					)
				);
				break;

			case "endpoint":
				if (data.endpoint) {
					schemas.push(generateWebApiSchema(data.endpoint, baseUrl));
				}
				break;

			case "dataset":
				if (data.dataset) {
					schemas.push(generateDatasetSchema(data.dataset, data.url || baseUrl));
				}
				break;

			case "example":
				// For legion pages - they're examples of API usage
				schemas.push(
					generateApiDocSchema(data.title || "API Example", data.description || "Example of Horus Heresy API in action", data.url || baseUrl)
				);
				break;
		}

		return schemas;
	};

	const schemas = getSchemas();

	return (
		<>
			{schemas.map((schema, index) => (
				<StructuredData key={index} data={schema} />
			))}
		</>
	);
}
