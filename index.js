const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mongodb").then(() => {
    console.log("Mongo DB conectado");
}).catch((erro) => {
    console.log(erro);
})


//Criando um model com mongose
const UsuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

mongoose.model('usuarios', UsuariosSchema)

let Marcos = mongoose.model('usuarios')

new Marcos({
    nome: "Leticia",
    sobrenome: "Lorrany",
    email: "Leticia@gmail.com",
    idade: 9,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário cadastrado com sucesso")
}).catch((erro) => {
    console.log("Erro ao cadastrar: " + erro)
})