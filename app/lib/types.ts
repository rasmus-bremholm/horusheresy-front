import { TypedObject } from "sanity";

export interface ApiEndPoint {
	_id: string;
	title: string;
	method: string;
	path: string;
	description: TypedObject | TypedObject[];
	funfacts: TypedObject | TypedObject[];
	category?: {
		title: string;
	};
	parameters?: Parameter[];
	responses?: ApiResponse[];
	codeExamples?: CodeExample[];
}

export interface Parameter {
	name: string;
	type: string;
	location: string;
	required: boolean;
	description: string;
	example: string;
}

export interface ApiResponse {
	statusCode: number;
	description: string;
	example: {
		_type: "code";
		language: string;
		code: string;
		filename?: string;
	};
}

export interface CodeExample {
	language: string;
	title: string;
	code: string;
}

export interface NewsItem {
	_id: string;
	title: string;
	publishedAt: string;
	content: TypedObject | TypedObject[];
	featured?: boolean;
}

export interface DocPage {
	_id: string;
	title: string;
	content: TypedObject | TypedObject[];
	category?: string;
	order?: number;
}

export interface AllContentQuery {
	docPages: DocPage[];
	news: NewsItem[];
	endpoints: ApiEndPoint[];
}

export interface LegionApiResponse {
	data: {
		legionInfo: LegionInfo;
		primarch: Primarch;
		characters: Character[];
	};
}

export interface Legion {
	id: number;
	name: string;
	description: string;
	primarch: string;
	traitor: boolean;
	homeworld: string;
	//colors?: LegionColors;
	size: number;
	characters: Character[] | null;
	quote: string | null;
	battlecry: string | null;
	img_thumb: string | null;
	image: string | "";
}

export interface LegionInfo {
	id: string;
	name: string;
	description: string;
	traitor: boolean;
	homeworld: string;
	size: string;
	quote: string | null;
	battlecry: string | null;
	img_thumb: string | null;
	image: string | null;
	colors_id: string | null;
	system_id: string | null;
	created_at: string;
	updated_at: string;
}

export interface Primarch {
	id: string;
	name: string;
	legion_id: string;
	discovery_order: number;
	homeworld: string | null;
	status: string;
	description: string | null;
	created_at: string;
	updated_at: string;
	traitor: boolean;
}

export interface Character {
	id: string;
	name: string;
	title: string | null;
	legion_id: string;
	rank: string;
	description: string;
	status: string;
	notable_for: string;
	created_at: string;
	updated_at: string;
	traitor: boolean;
}

export interface FeatureCardProps {
	cardTitle: string;
	cardImgUrl: string;
	cardDesc: string;
}
