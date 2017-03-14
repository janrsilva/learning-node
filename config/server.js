var express = require('express'); // Recupera a bibioteca do express
var consing = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express(); //executa a function retornada pelo express

app.set('view engine', 'ejs'); //informa ao express quem é o engine de views
app.set('views', './application/views');

app.use(express.static('./application/public/')); //Permite acesso aos arquivos estaticos
app.use(bodyParser.urlencoded({extended: true})); //Adiciona bodyParser como middleware
app.use(expressValidator());

consing()
    .include('./application/routes') //Adiciona a pasta routes
    .then('./config/db.js') //Adiciona a modulo do banco de dados
    .then('./application/models') //Adiciona a models do banco de dados
    .then('./application/controllers') //Adiciona a controllers
    .into(app); // Adiciona na instancia do app

module.exports = app; //exporta o app