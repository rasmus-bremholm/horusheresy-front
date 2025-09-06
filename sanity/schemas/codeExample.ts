import { defineType, defineField } from "sanity";

export default defineType({
	name: "codeExample",
	title: "Code Example",
	type: "object",
	fields: [
		defineField({
			name: "language",
			type: "string",
			title: "Language",
			options: {
				list: [
					{ title: "JavaScript", value: "javascript" },
					{ title: "Python", value: "python" },
					{ title: "cURL", value: "bash" },
					{ title: "PHP", value: "php" },
					{ title: "Java", value: "java" },
				],
			},
			validation: (r) => r.required(),
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Example Title",
			description: "e.g., 'Fetch with JavaScript' or 'Using Python requests'",
		}),
		defineField({
			name: "code",
			type: "code",
			title: "Code",
			options: {
				withFilename: true,
			},
			validation: (r) => r.required(),
		}),
	],
	preview: {
		select: {
			language: "language",
			title: "title",
		},
		prepare({ language, title }) {
			return {
				title: title || `${language} example`,
				subtitle: language,
			};
		},
	},
});
