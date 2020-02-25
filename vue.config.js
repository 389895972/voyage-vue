module.exports = {
    publicPath: './',

     devServer: {
        proxy: {
            '/api': {

                target: 'http://10.0.20.114:9001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            },
            // '/api2': {
            //
            //     target: 'http://10.0.20.250:8008',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api2': ''  //通过pathRewrite重写地址，将前缀/api转为/
            //     }
            // },

        }

}
 }
