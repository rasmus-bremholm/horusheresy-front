import { ApiInfo, DatasetInfo, EndpointInfo } from "../lib/schemas/apiSchemas";

interface StructuredDataProps {
	data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
	return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />;
}

// Generate main API/Software schema
export function generateApiSchema(apiInfo: ApiInfo) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: apiInfo.name,
		description: apiInfo.description,
		url: apiInfo.baseUrl,
		applicationCategory: "DeveloperApplication",
		applicationSubCategory: "API",
		operatingSystem: "Web Browser",
		softwareVersion: apiInfo.version,
		programmingLanguage: ["REST", "JSON"],
		author: {
			"@type": "Person",
			name: apiInfo.author,
		},
		provider: {
			"@type": "Person",
			name: apiInfo.author,
		},
		downloadUrl: apiInfo.documentation,
		softwareHelp: {
			"@type": "CreativeWork",
			url: apiInfo.documentation,
		},
		license: apiInfo.license || "MIT",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			availability: "https://schema.org/InStock",
		},
	};
}
