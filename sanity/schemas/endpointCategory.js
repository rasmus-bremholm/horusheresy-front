import { defineType, defineField } from "sanity";

export default defineType({
  name: "endpointCategory",
  title: "Endpoint Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required()
    }),
    defineField({
      name: "description",
      type: "text"
    }),
    defineField({
      name: "order",
      type: "number"
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon/Emoji",
      description: "Optional icon or emoji for the category"
    })
  ],
  preview: {
    select: { title: "title", subtitle: "description" }
  }
});
