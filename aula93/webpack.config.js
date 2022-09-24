import { resolve } from 'path' // commonJS

export const node = 'development'
export const entry = './src/main.js'
export const output = {
    path: resolve('aula93', 'js'),
    filename: 'bundle.js'
}
export const module = {
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
}
export const devtool = 'source-map'
