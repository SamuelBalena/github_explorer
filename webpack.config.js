const path = require('path') // Importando o path para mexer no diretório
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const { dirname } = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src', 'index.tsx'), // configurando os arquivos de entrada
    output: {
        path: path.resolve(__dirname,'dist'), // configurando a pasta que vai sair
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx'],
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), // Para filtrar o valor false que ReactRefresh vai retornar, assim não crashando o webpack
    module: {
        rules:[
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader'],
            }
        ]
    },
}