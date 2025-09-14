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
		headline: title,
		description: description,
		url: url,
		author: {
			"@type": "Person",
			name: "Rasmus Bremholm",
		},
		publisher: {
			"@type": "Organization",
			name: "Horus Heresy API",
			logo: {
				"@type": "ImageObject",
				url: "https://horus-heresy-next.vercel.app/favicon.ico",
			},
		},
		datePublished: "2025-01-01", // Project started in 2025
		dateModified: new Date().toISOString().split("T")[0],
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		articleSection: "API Documentation",
		keywords: ["API", "REST", "Warhammer 40K", "Horus Heresy", "Documentation"],
		proficiencyLevel: "Intermediate",
		dependencies: "HTTP Client",
	};
}

// Generate WebAPI schema for individual endpoints
export function generateWebApiSchema(endpoint: EndpointInfo, baseUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "WebAPI",
		name: `${endpoint.method} ${endpoint.path}`,
		description: endpoint.description,
		url: `${baseUrl}${endpoint.path}`,
		documentation: `${baseUrl}/api-docs`,
		provider: {
			"@type": "Organization",
			name: "Horus Heresy API",
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${baseUrl}${endpoint.path}`,
				httpMethod: endpoint.method,
			},
		},
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
			"https://github.com/Visceral89",
			"https://rasmusbremholm.com",
		],
		knowsAbout: ["Warhammer 40000", "Horus Heresy", "Space Marines", "API Development", "REST APIs", "JSON"],
	};
}

// Generate WebSite schema for homepage
export function generateWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Horus Heresy API",
		description: "The ultimate Warhammer 40K Horus Heresy database and RESTful API",
		url: "https://horus-heresy-next.vercel.app",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://horus-heresy-next.vercel.app/legions/{search_term_string}",
			},
			"query-input": "required name=search_term_string",
		},
		publisher: {
			"@type": "Organization",
			name: "Horus Heresy API",
		},
		inLanguage: "en-US",
	};
}

// Generate news page schema
export function generateNewsPageSchema(title: string, description: string, url: string, newsItems: any[]) {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: title,
		description: description,
		url: url,
		mainEntity: {
			"@type": "ItemList",
			itemListElement: newsItems.slice(0, 10).map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "Article",
					headline: item.title,
					datePublished: item.publishedAt,
					url: `${url}/${item._id}`,
				},
			})),
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://horus-heresy-next.vercel.app",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "News",
					item: url,
				},
			],
		},
	};
}

// Generate individual news article schema
export function generateNewsArticleSchema(newsItem: any, baseUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: newsItem.title,
		datePublished: newsItem.publishedAt,
		dateModified: newsItem.publishedAt,
		author: {
			"@type": "Person",
			name: "Rasmus Bremholm",
		},
		publisher: {
			"@type": "Organization",
			name: "Horus Heresy API",
			logo: {
				"@type": "ImageObject",
				url: `${baseUrl}/favicon.ico`,
			},
		},
		url: `${baseUrl}/news/${newsItem._id}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${baseUrl}/news/${newsItem._id}`,
		},
		articleSection: "API Updates",
		keywords: ["Horus Heresy API", "Updates", "News", "API Development"],
		...(newsItem.featured && {
			isAccessibleForFree: true,
			hasPart: {
				"@type": "WebPageElement",
				isAccessibleForFree: true,
			},
		}),
	};
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.url,
		})),
	};
}
