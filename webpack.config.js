module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
      },
    ],
  },
};
