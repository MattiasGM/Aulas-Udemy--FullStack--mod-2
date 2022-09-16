const path = require('path') // commonJS

module.exports = {
    node: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('aula93', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map',
}
