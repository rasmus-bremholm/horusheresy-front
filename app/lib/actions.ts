"use server";

export async function tryEndpoint(formData: FormData) {
	const endpoint = formData.get("endpoint") as string;

	try {
		const res = await fetch(`https://horus-heresy-next.vercel.app/api/${endpoint}`, {
			headers: {
				"x-api-key": process.env.API_KEY!,
			},
		});

		if (!res.ok) {
			return { error: `HTTP ${res.status} : ${res.statusText}` };
		}

		const data = await res.json();
		return data;
	} catch (error) {
		return { error: "Failed to fetch data" };
	}
}
