const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'development', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/, // Match files with a .css extension
                use: [
                    'style-loader', // Inject CSS into the DOM using <style> tags
                    'css-loader' // Interpret @import and url() like import/require() and resolve them
                ]
            },
            {
                test: /\.(scss|sass)$/, // Match files with a .scss or .sass extension
                use: [
                    'style-loader', // Inject CSS into the DOM using <style> tags
                    'css-loader', // Interpret @import and url() like import/require() and resolve them
                    'sass-loader' // Compile Sass/SCSS to CSS
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Match image files
                use: [
                    'file-loader' // Copy image files to the output directory
                ]
            },
            
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
}