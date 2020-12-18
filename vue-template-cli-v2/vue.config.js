const port = process.env.port || process.env.npm_config_port || 8090;
const is_prod = process.env.NODE_ENV === 'production';
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  lintOnSave: !is_prod,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', 'src')
      .set('@assets', resolve('src/assets'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@components', resolve('src/components'))
      .set('@plugins', resolve('src/plugins'))
      .set('@views', resolve('src/views'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@layouts', resolve('src/layouts'))
      .set('@static', resolve('src/static'));
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASL_URL]: {
        target: `http://127.0.0.1:${port}`,
        changeOrign: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASL_URL]: ''
        }
      }
    }
  }
};
