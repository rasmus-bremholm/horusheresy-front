import { defineType, defineField, validation } from "sanity";

export default defineType({
	name: "docPage",
	title: "Documentation Page",
	type: "document",
	fields: [
		defineField({ name: "title", type: "string", validation: (r) => r.required() }),
		defineField({ name: "slug", type: "slug", options: { source: "title" } }),
		defineField({ name: "category", type: "string", options: { list: ["authentication", "guide", "introduction"] } }),
		defineField({ name: "order", type: "number" }),
		defineField({ name: "content", type: "array", of: [{ type: "block" }, { type: "code" }] }),
	],
});
