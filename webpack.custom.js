config = merge(
  config,
  require("./webpack.microfrontend")(config, options, targetOptions)
);
