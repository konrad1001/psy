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
  ],
}
