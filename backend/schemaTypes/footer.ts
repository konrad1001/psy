export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      description: 'Text displayed in the footer.',
    },
    {
      name: 'helpfulLinks',
      title: 'Helpful Links section',
      type: 'object',
      fields: [
        {
          name: 'toggle',
          title: 'Toggle',
          type: 'boolean',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}
