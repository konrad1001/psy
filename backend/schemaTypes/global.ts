export default {
  name: 'global',
  title: 'Global Config',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'primary',
      title: 'Site primary colour',
      description: 'Main colour used on home page.',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
  ],
}
