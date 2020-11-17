module.exports = {
  publicPath: '/',
  outputDir: 'dist',
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
