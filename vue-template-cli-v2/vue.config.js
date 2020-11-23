const port = process.env.port || process.env.npm_config_port || 8090;
const is_prod = process.env.NODE_ENV === 'production';
module.exports = {
  lintOnSave: !is_prod,
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
