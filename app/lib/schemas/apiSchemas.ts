export interface ApiInfo {
	name: string; // Title'ish "Horus Heresy API"
	version: string; // My version number "1.0.3"
	description: string; // description "Ultimate 30k REST API"
	baseUrl: string; // "https://horus-heresy-next.vercel.app"
	documentation: string; // documentation URL "https://horus-heresy-next.vercel.app/api-docs"
	author: string; // author "Rasmus Bremholm"
	license?: string;
}

export interface DatasetInfo {
	// This describes what kind of data my API serves
	name: string; // "Space Marine Legions Dataset"
	description: string; // All 20 Legions from the Horus Heresy
	keywords: string[]; // just keywords "Horus, Heresy, Warhammer 30K, etc"
	size: number; // number of legions
	format: string[]; // JSON
}

export interface EndpointInfo {
	// This SHOULD match my Sanity Schema for the API Endpoint struct.
	title: string;
	method: string;
	path: string; // /api/legions/{id}
	slug: string;
	description: string;
	parameters?: any[];
	examples?: any[];
}
