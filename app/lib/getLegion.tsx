import { Legion } from "./types";

export default async function getLegion(id: string): Promise<Legion> {
	const apiKey = process.env.API_KEY;
	if (!apiKey) {
		throw new Error("Missing Api key in header");
	}

	const response = await fetch(`https://horus-heresy-next.vercel.app/api/legion/${id}`, {
		headers: {
			"x-api-key": apiKey,
		} as HeadersInit,
	});

	if (!response.ok) {
		throw new Error("Couldnt fetch legion");
	}

	return await response.json();
}
