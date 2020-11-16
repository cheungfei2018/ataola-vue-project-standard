module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    open: true,
    host: 'localhost',
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
