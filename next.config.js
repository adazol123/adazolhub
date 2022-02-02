const path = require('path');
const withImages = require('next-images');

module.exports = {
  reactStrictMode: true,
  withImages: withImages({
    exclude: path.resolve(__dirname, 'src/assets/svg'),
    webpack(config, options) {
      return config
  }
  }),
}
