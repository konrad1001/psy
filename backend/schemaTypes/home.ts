export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main heading, e.g., "Counselling and Psychotherapy"',
    },
    {
      name: 'therapistName',
      title: 'Therapist Name',
      type: 'string',
    },
    {
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      description: 'e.g., (He/Him), (They/Them)',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 5,
      description: 'Short welcoming message or intro.',
    },

    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'approachTitle',
      title: 'My Approach Title',
      type: 'string',
      initialValue: 'My Approach',
    },
    {
      name: 'approachText',
      title: 'My Approach Description',
      type: 'text',
    },
    {
      name: 'learnMoreButtonText',
      title: 'Learn More Button Text',
      description: 'This button links to the service (Therapy) page',
      type: 'string',
    },
    {
      name: 'splashImage',
      title: 'Splash Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'approachBoxOffset',
      title: 'Box Offset',
      type: 'number',
      description:
        'Control the offset of this box relative to the image its in as a percentage. Setting this value to 50 will position the box directly in the centre.',
      validation: (Rule: {min: (arg0: number) => any; max: (arg1: number) => any}) =>
        Rule.min(0).max(100),
    },
    {
      name: 'officeSection',
      title: 'Office Section',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Office Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
            },
          ],
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'descriptionTop',
          title: 'Description (Top)',
          type: 'text',
        },
        {
          name: 'descriptionBottom',
          title: 'Description (Bottom)',
          type: 'text',
        },
      ],
    },
    {
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      description: 'This button links to the contact page',
    },
    {
      name: 'accreditationsSection',
      title: 'Accreditations Section',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [{type: 'image'}],
        },
      ],
    },
  ],
}
