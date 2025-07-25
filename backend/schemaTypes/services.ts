export default {
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Label that goes above the title, e.g., "What I do"',
    },
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Service',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    },
  ],
}
