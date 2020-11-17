module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080
    // proxy: {
    // 	'/api': {
    // 		target: '',
    // 		changeOrign: true,
    // 		ws: true,
    // 		pathRewrite: {
    // 			'^/api': '/'
    // 		}
    // 	}
    // }
  }
};
