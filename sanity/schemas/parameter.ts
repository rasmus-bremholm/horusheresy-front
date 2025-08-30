import { defineType, defineField } from "sanity";

export default defineType({
  name: "parameter",
  title: "Parameter",
  type: "object",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Parameter Name",
      validation: (r) => r.required()
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Data Type",
      options: {
        list: ["string", "integer", "number", "boolean", "array", "object"]
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Parameter Location",
      options: {
        list: [
          { title: "Path", value: "path" },
          { title: "Query", value: "query" },
          { title: "Header", value: "header" }
        ],
        layout: "radio"
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: "required",
      type: "boolean",
      title: "Required",
      initialValue: false
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "example",
      type: "string",
      title: "Example Value"
    })
  ],
  preview: {
    select: {
      name: "name",
      type: "type",
      location: "location",
      required: "required"
    },
    prepare({ name, type, location, required }) {
      return {
        title: name,
        subtitle: `${type} (${location})${required ? " - Required" : ""}`
      }
    }
  }
});
