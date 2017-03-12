var express = require('express'); // Recupera a bibioteca do express
var consing = require("consign");

var app = express(); //executa a function retornada pelo express
app.set('view engine', 'ejs'); //informa ao express quem é o engine de views
app.set('views', './app/views')

consing()
.include('./app/routes') //Adiciona a pasta routes
.into(app); // Adiciona na instancia do app

module.exports = app; //exporta o app