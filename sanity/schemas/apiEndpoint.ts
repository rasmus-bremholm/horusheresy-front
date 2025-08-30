import { defineType, defineField } from "sanity";

export default defineType({
	name: "apiEndpoint",
	title: "API Endpoint",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Endpoint Title",
			description: "e.g., 'Get all legions' or 'Get legion by ID'",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "method",
			type: "string",
			title: "HTTP Method",
			options: {
				list: ["GET", "POST", "PUT", "DELETE", "PATCH"],
				layout: "radio",
			},
			initialValue: "GET",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "path",
			type: "string",
			title: "Endpoint Path",
			description: "e.g., '/api/legions' or '/api/legion/[id]'",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: { source: "title" },
			validation: (r) => r.required(),
		}),
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
			title: "Description",
		}),
		defineField({
			name: "funfacts",
			type: "array",
			of: [{ type: "block" }],
			title: "Fun Facts",
			description: "Fun facts or intresting stuff.",
		}),
		defineField({
			name: "category",
			type: "reference",
			to: [{ type: "endpointCategory" }],
			validation: (r) => r.required(),
		}),
		defineField({
			name: "parameters",
			type: "array",
			of: [{ type: "parameter" }],
			title: "Parameters",
		}),
		defineField({
			name: "responses",
			type: "array",
			of: [{ type: "apiResponse" }],
			title: "Example Responses",
		}),
		defineField({
			name: "codeExamples",
			type: "array",
			of: [{ type: "codeExample" }],
			title: "Code Examples",
		}),
		defineField({
			name: "order",
			type: "number",
			title: "Display Order",
		}),
	],
	preview: {
		select: {
			title: "title",
			method: "method",
			path: "path",
		},
		prepare({ title, method, path }) {
			return {
				title,
				subtitle: `${method} ${path}`,
			};
		},
	},
	orderings: [{ title: "Order (asc)", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
