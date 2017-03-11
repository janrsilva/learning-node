var express = require('express'); // Recupera a bibioteca do express
var app = express(); //executa a function retornada pelo express
app.set('view engine', 'ejs'); //informa ao express quem é o engine de views
app.set('views', './app/views')
module.exports = app; //exporta o app