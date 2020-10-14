const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

const config = {
  base: () => ({
    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname)
      }
    }
  }),
  development: () => ({
    mode:     'development',
    entry:    './doc/index.js',
    devtool:  'inline-source-map',
    devServer: {
      contentBase:'./doc/public',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'doc/index.html' }),
    ]
  }),
  production: env => ({

  }),
};


// merge all passed configurations (passed by environment variables)
module.exports = env => Object
  .keys({ ...env })
  .reduce(
    (merged, name) => Object.assign(merged, config[name](env)),
    config.base(env)
  );
