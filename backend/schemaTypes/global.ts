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
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'primaryDark',
      title: 'Site primary dark colour',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'secondary',
      title: 'Site secondary colour',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'accent1',
      title: 'Site accent colour 1',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'accent2',
      title: 'Site accent colour 2',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
  ],
}
