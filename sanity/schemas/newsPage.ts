import { defineType, defineField, validation } from "sanity";

export default defineType({
	name: "newsPage",
	title: "News Article",
	type: "document",
	fields: [
		defineField({ name: "title", type: "string", validation: (r) => r.required() }),
		defineField({ name: "slug", type: "slug", options: { source: "title" } }),
		defineField({ name: "content", type: "array", of: [{ type: "block" }, { type: "code" }] }),
		defineField({
			name: "publishedAt",
			title: "Published Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (r) => r.required(),
		}),
		defineField({
			name: "featured",
			title: "Featured News",
			type: "boolean",
			description: "Highlight this news item",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "title",
			publishedAt: "pudblishedAt",
		},
		prepare({ title, publishedAt }) {
			return {
				title,
				subtitle: new Date(publishedAt).toLocaleDateString(),
			};
		},
	},
	orderings: [
		{
			title: "Published Date (newest first)",
			name: "publishedDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
	],
});
