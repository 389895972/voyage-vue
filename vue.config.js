module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.0.20.144:9001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }

}}