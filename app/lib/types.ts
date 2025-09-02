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

export interface NewsItem{
   _id: string;
   title: string;
}
