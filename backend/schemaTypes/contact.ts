const locationFields = [
  {
    name: 'title',
    title: 'Location Title',
    type: 'string',
    description: 'Heading for this location, e.g. "Ealing".',
  },
  {
    name: 'addressFields',
    title: 'Address Fields',
    type: 'array',
    of: [
      {
        type: 'string',
        title: 'Address Line',
        description:
          'Each line of the address, e.g., "3 Montpelier Avenue", "Ealing", "London", "W5 2XP".',
      },
    ],
    description: 'Array of address lines for this location.',
    validation: (Rule: any) => Rule.min(1),
  },
  {
    name: 'mapEmbedUrl',
    title: 'Map Embed URL',
    type: 'url',
    description: 'Google Maps embed URL for this location.',
    validation: (Rule: any) => Rule.required().uri(),
  },
]

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title of the page.',
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Short description of the page, e.g.',
    },
    {
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
      description: 'Title for the contact form.',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'object',
      description: 'Contact details for the page.',
      fields: [
        {
          name: 'title',
          title: 'Contact Details Title',
          type: 'string',
          description: 'Title for the contact details section.',
        },
        {
          name: 'name',
          title: 'Contact Name',
          type: 'string',
          description: 'Name of the contact person.',
        },
        {
          name: 'email',
          title: 'Contact Email',
          type: 'string',
          description: 'Email address for contact.',
          validation: (Rule: {required: () => any}) => Rule.required().email(),
        },
      ],
    },

    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      description:
        'Locations shown on the contact page. Drag to change the order they appear in.',
      of: [
        {
          name: 'location',
          title: 'Location',
          type: 'object',
          fields: locationFields,
          preview: {
            select: {title: 'title', subtitle: 'addressFields.0'},
          },
        },
      ],
      validation: (Rule: any) => Rule.min(1),
    },

    {
      name: 'fees',
      title: 'Fees',
      type: 'object',
      description: 'Fees for the services offered.',
      fields: [
        {
          name: 'title',
          title: 'Fees Title',
          type: 'string',
          description: 'Title for the fees section.',
        },
        {
          name: 'description',
          title: 'Fees Description',
          type: 'text',
          description: 'Description of the fees.',
        },
        {
          name: 'items',
          title: 'Fee Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Item Title',
                  type: 'string',
                },
                {
                  name: 'body',
                  title: 'Item Body',
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
