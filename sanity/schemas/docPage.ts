import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'docPage',
  title: 'Doc Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'order', type: 'number' }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'code', options: { withFilename: true } },
      ],
    }),
  ],
})
