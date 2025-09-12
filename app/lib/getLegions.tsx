import type { Legion, LegionInfo } from "./types";

export default async function getLegions(): Promise<LegionInfo[]> {
	const apiKey = process.env.API_KEY;
	if (!apiKey) {
		throw new Error("Missing Api key in header");
	}

	const response = await fetch("https://horus-heresy-next.vercel.app/api/legions", {
		headers: { "x-api-key": process.env.API_KEY as string } as HeadersInit,
	});

	if (!response.ok) {
		throw new Error("Couldnt fetch data, you suck.");
	}

	return await response.json();
}
