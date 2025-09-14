import type { EndpointInfo, DatasetInfo } from "../lib/schemas/apiSchemas";
import StructuredData from "./StructuredData";
import { generateApiSchema, generateOrganizationSchema, generateDatasetSchema, generateApiDocSchema, generateWebApiSchema, generateNewsPageSchema, generateNewsArticleSchema, generateBreadcrumbSchema, generateWebSiteSchema } from "./StructuredData";

interface ApiSchemasProps {
	type: "homepage" | "api-docs" | "endpoint" | "dataset" | "example" | "news" | "news-article";
	data?: {
		title?: string;
		description?: string;
		url?: string;
		endpoint?: EndpointInfo;
		dataset?: DatasetInfo;
		newsItems?: any[];
		newsItem?: any;
		breadcrumbs?: { name: string; url: string }[];
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
				// Add WebSite schema for homepage
				schemas.push(generateWebSiteSchema());
				schemas.push(
					generateApiSchema({
						name: "Horus Heresy API",
						version: "1.0.3",
						description:
							"The ultimate Warhammer 40K Horus Heresy database and RESTful API. Explore all 20 Space Marine Legions, primarchs, characters, and battles from the Horus Heresy era.",
						baseUrl,
						documentation: `${baseUrl}/api-docs`,
						author: "Rasmus Bremholm",
					})
				);
				// Add dataset schema for the main data
				schemas.push(
					generateDatasetSchema(
						{
							name: "Horus Heresy Legion Database",
							description: "Complete dataset of all 20 Space Marine Legions from the Horus Heresy era, including primarchs, characters, and battle information",
							keywords: ["Warhammer 40K", "Horus Heresy", "Space Marines", "Legions", "Primarchs", "30K", "Games Workshop"],
							size: 20,
							format: ["JSON"],
						},
						baseUrl
					)
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

			case "news":
				schemas.push(
					generateNewsPageSchema(
						data.title || "News & Updates - Horus Heresy API",
						data.description || "Latest project updates and new features for the Horus Heresy API",
						data.url || `${baseUrl}/news`,
						data.newsItems || []
					)
				);
				break;

			case "news-article":
				if (data.newsItem) {
					schemas.push(generateNewsArticleSchema(data.newsItem, baseUrl));
				}
				break;
		}

		// Add breadcrumbs if provided
		if (data.breadcrumbs) {
			schemas.push(generateBreadcrumbSchema(data.breadcrumbs));
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
