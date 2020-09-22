
module.exports = {
    publicPath: '/',
    devServer: {
        port: 9999,
        disableHostCheck: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: "store",
            libraryTarget: 'umd',
            jsonpFunction: "webpackJsonp_store",
        }
    }
}