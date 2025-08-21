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
      name: 'location',
      title: 'Location',
      type: 'object',
      description: 'Location details for the page.',
      fields: [
        {
          name: 'title',
          title: 'Location Title',
          type: 'string',
          description: 'Title for the location section.',
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
          description: 'Array of address lines for the contact location.',
          validation: (Rule: {min: (arg0: number) => any}) => Rule.min(1),
        },

        {
          name: 'mapEmbedUrl',
          title: 'Map Embed URL',
          type: 'url',
          description: 'Google Maps embed URL for the location.',
          validation: (Rule: {
            required: () => {(): any; new (): any; uri: {(): any; new (): any}}
          }) => Rule.required().uri(),
        },
      ],
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
