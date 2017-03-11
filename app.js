var app = require("./config/server");

app.get('/', function(req, res){
    res.render('home/index'); //Renderiza a tela.
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia'); //Renderiza a tela.
});

app.get('/noticias', function(req, res){
    res.render('noticias/noticias'); //Renderiza a tela.
});

/**
 * Inicia o servidor na porta 80
 */
app.listen(80, function(){ 
    console.log('servidor iniciado');
});