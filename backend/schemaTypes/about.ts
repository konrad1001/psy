export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Page Label',
      type: 'string',
      description: 'Label that goes above the title, e.g., "About Me"',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 5,
      description: 'A short bio of name and accreditation.',
    },
    {
      name: 'longBio',
      title: 'Long Bio',
      type: 'text',
      description: 'A detailed biography of the therapist.',
    },
    {
      name: 'trainingAndExperience',
      title: 'Training and Experience',
      type: 'array',
      description: "Details about the therapist's training and experience.",
      of: [{type: 'block'}],
    },

    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      description: 'Optional cards with a title and body. Maximum of two cards.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'body',
              title: 'Card Body',
              type: 'text',
              rows: 5,
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.max(2),
    },
  ],
}
