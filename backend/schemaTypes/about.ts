export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the therapist.',
    },
    {
      name: 'accreditation',
      title: 'Accreditation',
      type: 'string',
      description:
        "The therapist's accreditation details (Optional). Appears right below the name.",
    },
    {
      name: 'trainingAndExperience',
      title: 'Training and Experience',
      type: 'array',
      description: "Details about the therapist's training and experience.",
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'supportAreas',
      title: 'Key Areas of Support',
      type: 'object',
      description:
        'A list of key areas in which the therapist has a special interest or additional experience.',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title for the key areas section, e.g., "Key areas of support"',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'A brief description of the key areas of support.',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
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
              ],
            },
          ],
        },

        {
          name: 'specificNeedTitle',
          title: 'Specific Need Title',
          type: 'string',
        },
        {
          name: 'specificNeedDescription',
          title: 'Specific Need Description',
          type: 'text',
        },
        {
          name: 'contactButtonText',
          title: 'Contact Button Text',
          type: 'string',
          description: 'Text for the contact button.',
        },
      ],
    },
  ],
}
