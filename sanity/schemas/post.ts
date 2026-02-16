import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Статья',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Обложка',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt текст',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'body',
      title: 'Текст статьи',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Обычный', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Цитата', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Жирный', value: 'strong' },
              { title: 'Курсив', value: 'em' },
              { title: 'Подчёркнутый', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Ссылка',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Открыть в новой вкладке',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt текст',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Подпись',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Заголовок для поисковиков (до 60 символов)',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Описание для поисковиков (до 160 символов)',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Дата публикации (новые)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, category, media, date }) {
      return {
        title,
        subtitle: `${category || 'Без категории'} · ${date ? new Date(date).toLocaleDateString('ru-RU') : 'Не опубликовано'}`,
        media,
      }
    },
  },
})
