const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, '../src/main.js')
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            inject: true,
            minify: {
                removeComments: true
            }
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devServer: {
        port: 8080,  // 端口号
        host: '0.0.0.0', // 主机名，设为该值可通过IP访问
        open: true
    }
}

module.exports = config
