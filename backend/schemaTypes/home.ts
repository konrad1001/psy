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
      name: 'practiceTitle',
      title: 'My Practice Title',
      type: 'string',
      initialValue: 'My Practice',
    },
    {
      name: 'practiceText',
      title: 'My Practice Description',
      type: 'text',
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
  ],
}
