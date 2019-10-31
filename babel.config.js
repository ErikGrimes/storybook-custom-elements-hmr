module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 version and > 0.25% in US and not Explorer > 0 and not Android > 0 and not Samsung > 0'
          ]
        }
      }
    ]
  ];
  const plugins = [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ];
  return {
    presets: presets,
    plugins: plugins
  };
};
