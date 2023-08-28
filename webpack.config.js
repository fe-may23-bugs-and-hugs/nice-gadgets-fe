// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader', // optional: for optimizing SVGs
        ],
      },
    ],
  },
};
