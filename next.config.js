module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
        },
      ],
    });
    return config;
  },
};
