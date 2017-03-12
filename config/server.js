var express = require('express'); // Recupera a bibioteca do express
var consing = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express(); //executa a function retornada pelo express

app.set('view engine', 'ejs'); //informa ao express quem é o engine de views
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true})); //Adiciona bodyParser como middleware
app.use(expressValidator());

consing()
    .include('./app/routes') //Adiciona a pasta routes
    .then('./config/db.js') //Adiciona a modulo do banco de dados
    .then('./app/models') //Adiciona a models do banco de dados
    .into(app); // Adiciona na instancia do app

module.exports = app; //exporta o app