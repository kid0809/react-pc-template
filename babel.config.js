module.exports = function (api) {
  api.cache(true);
  const presets = [
    "@babel/react",
    ["@babel/env", {
      "modules": false,
      "useBuiltIns": 'usage',
      "corejs": { version: 3, proposals: true }
    }]
  ];
  const plugins = [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties", // class的方法可以用箭头函数自动bind this
    "@babel/plugin-transform-runtime",
    ["import", {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }],
    ["react-css-modules", {// 达到类似vue的scoped效果
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
          plugins: [
            'postcss-nested',
          ],
        },
      },
      generateScopedName: '[local]-[hash:base64:10]',
      webpackHotModuleReloading: true,
    }],
  ];

  return {
    presets,
    plugins
  };
};
