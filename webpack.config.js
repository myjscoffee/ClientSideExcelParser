const htmlWebpackPlugin= require("html-webpack-plugin")
const path= require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    entry : {
        main: path.resolve(__dirname,'./src/app.js')
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        // publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        historyApiFallback: true
    },
    module : {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
            }
            },
            {
            test:/\.css$/,
            use: ['style-loader','css-loader']
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            title: "Excel Parser",
            template: './src/app.html',
          }),
          new CleanWebpackPlugin()
    ]
}