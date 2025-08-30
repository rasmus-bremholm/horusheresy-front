import { defineType, defineField } from "sanity";

export default defineType({
	name: "apiResponse",
	title: "API Response",
	type: "object",
	fields: [
		defineField({
			name: "statusCode",
			type: "number",
			title: "Status Code",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
		}),
		defineField({
			name: "example",
			type: "code",
			title: "Example Response",
			options: {
				language: "json",
				withFilename: false,
			},
		}),
	],
	preview: {
		select: {
			statusCode: "statusCode",
			description: "description",
		},
		prepare({ statusCode, description }) {
			return {
				title: `${statusCode}`,
				subtitle: description,
			};
		},
	},
});
