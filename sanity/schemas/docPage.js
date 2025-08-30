import { defineType, defineField } from "sanity";

export default defineType({
	name: "docPage",
	title: "Doc Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: { source: "title" },
			validation: (r) => r.required(),
		}),
		defineField({
			name: "category",
			type: "string",
			options: {
				list: [
					{ title: "Introduction", value: "introduction" },
					{ title: "Quick Start", value: "quickstart" },
					{ title: "Authentication", value: "authentication" },
					{ title: "General Guide", value: "guide" },
				],
			},
		}),
		defineField({ name: "order", type: "number" }),
		defineField({
			name: "content",
			type: "array",
			of: [{ type: "block" }, { type: "code", options: { withFilename: true } }],
		}),
	],
	preview: {
		select: { title: "title", subtitle: "category" },
	},
	orderings: [{ title: "Order (asc)", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
