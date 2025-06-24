import { defineType, defineField } from 'sanity'
export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
            validation: (rule) => rule.required()
        })
    ]
})