export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'toggle',
      title: 'Toggle component',
      type: 'boolean',
      description: "Toggle this on when you're ready to display the testimonials section",
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'clientName',
              type: 'string',
            },
            {
              name: 'notes',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'date',
              type: 'string',
              description:
                'Optional date for review, choose a format for these how best youd like them to display.',
            },
          ],
        },
      ],
    },
  ],
}
