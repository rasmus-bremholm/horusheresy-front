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

export interface Legion {
	id: number;
	name: string;
	description: string;
	primarch: string;
	traitor: boolean;
	homeworld: string;
	colors?: LegionColors;
}


export interface LegionColors {
	primary: string;
	secondary: string;
	accent: string;
}
