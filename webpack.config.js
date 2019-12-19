const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client_scripts/app.js',
    output: {
        filename: 'package.js',
        path: path.join(__dirname,'./public/js')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}