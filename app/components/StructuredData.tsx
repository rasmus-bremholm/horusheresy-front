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

// Generate dataset schema for data collections.
export function generateDatasetSchema(datasetInfo: DatasetInfo, baseUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Dataset",
		name: datasetInfo.name,
		description: datasetInfo.description,
		keywords: datasetInfo.keywords,
		url: baseUrl,
		creator: {
			"@type": "Person",
			name: "Rasmus Bremholm",
		},
		publisher: {
			"@type": "Organization",
			name: "Horus Heresy API",
		},
		encodingFormat: datasetInfo.format,
		distribution: datasetInfo.format.map((format) => ({
			"@type": "DataDownload",
			encodingFormat: format,
			contentUrl: `${baseUrl}?format=${format.toLowerCase()}`,
		})),
		temporalCoverage: "Horus Heresy Era (30th-31st Millennium)",
		spatialCoverage: "Warhammer 40,000 Universe",
		...(datasetInfo.size && {
			variableMeasured: `${datasetInfo.size} records`,
		}),
	};
}

// Generate TechArticle schema for API documentation pages
export function generateApiDocSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Rasmus Bremholm"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Horus Heresy API",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horus-heresy-next.vercel.app/favicon.ico"
      }
    },
    "datePublished": "2024-01-01", // Use your actual publish date
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": "API Documentation",
    "keywords": ["API", "REST", "Warhammer 40K", "Horus Heresy", "Documentation"],
    "proficiencyLevel": "Intermediate",
    "dependencies": "HTTP Client"
  };
}

// Generate Organization schema for site-wide use
export function generateOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Horus Heresy API",
		description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API",
		url: "https://horus-heresy-next.vercel.app",
		logo: {
			"@type": "ImageObject",
			url: "https://horus-heresy-next.vercel.app/favicon.ico",
		},
		foundingDate: "2025",
		founder: {
			"@type": "Person",
			name: "Rasmus Bremholm",
		},
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Developer Support",
			url: "https://rasmusbremholm.com/contact",
		},
		sameAs: [
			// Add your social media profiles here
			"https://github.com/rasmus-bremholm",
			"https://rasmusbremholm.com",
			// "https://twitter.com/yourusername"
		],
		knowsAbout: ["Warhammer 40000", "Horus Heresy", "Space Marines", "API Development", "REST APIs", "JSON"],
	};
}
