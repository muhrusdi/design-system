const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            reportFiles: ['stories/**/*.{ts|tsx}']
          }
        },
      ]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias = Object.assign(config.resolve.alias, { '@': path.resolve(__dirname, '..') })
    return config
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  stories: [
    '../src/**/**/*.stories.(tsx|mdx)',
    '../stories/*.stories.(tsx|mdx)'
  ],
};