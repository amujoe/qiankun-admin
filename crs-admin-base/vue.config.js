module.exports = {
    publicPath: '/',
    devServer: {
        port: 8888,
        disableHostCheck: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
        },
    },
}