const path = require('path')
const absPath = path.join(__dirname,'public');


module.exports = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        path: absPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.s?css$/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: absPath,
    }
};