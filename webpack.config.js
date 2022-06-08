const path = require('path') // Importando o path para mexer no diretório
const HtmlWebpackPlugin =  require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src', 'index.jsx'), // configurando os arquivos de entrada
    output: {
        path: path.resolve(__dirname,'dist'), // configurando a pasta que vai sair
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
}