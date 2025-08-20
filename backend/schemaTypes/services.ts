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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'figures',
      title: 'Figures',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'secondaryBody',
      title: 'Secondary Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'contracts',
      title: 'Available Contracts',
      type: 'object',
      description: 'Availabe contracts',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'availableContracts',
          title: 'List of contracts',
          description: 'List of contracts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Contract Title',
                  type: 'string',
                },
                {
                  name: 'body',
                  title: 'Contract Description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
