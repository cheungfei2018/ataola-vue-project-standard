const path = require('path');
const fs = require('fs');
const { env } = process;
const is_production = env.NODE_ENV === 'production';

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/abstracts/*.styl'),
      ],
    });
}

module.exports = {
  publicPath: env.PUBLIC_PATH,
  outputDir: 'dist',
  indexPath: 'public/index.html',
  chainWebpack: config => {
    // auto imports abstract styles to each vue source file
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)));
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      }
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: '[name]-[local]_[hash:base64:5]'
        },
        localsConvention: 'camelCaseOnly'
      },
      less: {
        globalVars: {
          primary: '#fff'
        },
        javascriptEnabled: true
      },
    }
  },
  devServer: {
    open: true,
    https: false,
    port: 9000,
    disableHostCheck: true,
  },
}
