module.exports = {
  lintOnSave: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: 'cart_ap.js', // Replace 'your-custom-filename.js' with your desired output filename
    },
  },
};