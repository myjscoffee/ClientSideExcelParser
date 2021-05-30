const htmlWebpackPlugin= require("html-webpack-plugin")
const path= require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    entry : {
        main: path.resolve(__dirname,'./src/app.js')
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: './dist',
        open: true
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
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            title: "Excel Parser",
          }),
          new CleanWebpackPlugin()
    ]
}