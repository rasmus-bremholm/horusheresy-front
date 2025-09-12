import type { MetadataRoute } from "next";

// You'll need to adjust these imports based on your project structure
// import { getAllLegions, getAllCharacters, getAllBattles } from '@/lib/database'

import getLegions from "./lib/getLegions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://horus-heresy-next.vercel.app";

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/legions`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/api-docs`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/news`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
	];

	// Dynamic legion pages
	try {
		// Replace this with your actual data fetching
		const legions = await getLegions();

		const legionPages = legions.map((legion) => ({
			url: `${baseUrl}/legions/${legion.id}`,
			lastModified: new Date(legion.updated_at),
			changeFrequency: "monthly" as const,
			priority: 0.9,
		}));

		return [...staticPages, ...legionPages];
	} catch (error) {
		console.error("Error generating sitemap:", error);
		// Fallback to just static pages if database fails
		return staticPages;
	}
}
