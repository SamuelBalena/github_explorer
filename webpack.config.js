const path = require('path') // Importando o path para mexer no diretório

module.exports = {
    entry: path.resolve(__dirname,'src', 'index.jsx'), // configurando os arquivos de entrada
    output: {
        path: path.resolve(__dirname,'dist'), // configurando a pasta que vai sair
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    },
}