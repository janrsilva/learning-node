var express = require('express'); // Recupera a bibioteca do express
var app = express(); //executa a function retornada pelo express

app.set('view engine', 'ejs'); //informa ao express quem é o engine de views

app.get('/', function(req, res){
    res.render('secao/home'); //Renderiza a tela.
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