module.exports = {
  devServer: {
    port: 8080, // 启动端口
    open: true, // 启动后是否自动打开网页
    // proxy: {
    //   '/api': {
    //     target: '',
    //     // target: 'http://172.22.105.5:3000/',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    // proxy: 'http://172.22.105.5:3000/'
  },
}
