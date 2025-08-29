import { defineType, defineField } from "sanity";

export default defineType({
	name: "docPage",
	title: "Doc Page",
	type: "document",
	options: { list: ["guide", "howto", "reference"] },
	initialValue: "guide",
	preview: {
		select: { title: "title", subtitle: "slug.current" },
	},
	orderings: [{ title: "Order (asc)", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
	fields: [
		defineField({ name: "title", type: "string", validation: (r) => r.required() }),
		defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
		defineField({ name: "order", type: "number" }),
		defineField({
			name: "content",
			type: "array",
			of: [{ type: "block" }, { type: "code", options: { withFilename: true } }],
		}),
	],
});
