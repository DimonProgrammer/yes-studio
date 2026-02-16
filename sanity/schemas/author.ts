import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Автор',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Биография',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
