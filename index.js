const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mongodb").then(() => {
    console.log("Mongo DB conectado");
}).catch((erro) => {
    console.log(erro);
})