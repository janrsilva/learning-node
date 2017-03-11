var express = require('express'); // Recupera a bibioteca do express
var app = express(); //executa a function retornada pelo express

app.get('/', function(req, res){
    res.send('<html><body><h1>Hello World with Node.js</h1></body></html>');
});

app.get('/vagas', function(req, res){
    res.send('<html><body><h1>Todas Vagas</h1></body></html>');
});

/**
 * Inicia o servidor na porta 80
 */
app.listen(80, function(){ 
    console.log('servidor iniciado');
});