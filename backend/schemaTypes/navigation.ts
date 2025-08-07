export default {
  name: 'navigation',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
    },
    {
      name: 'tabNames',
      title: 'Tab Names',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule: {
        required: () => {(): any; new (): any; length: {(arg0: number): any; new (): any}}
      }) => Rule.required().length(4),
    },
  ],
}
