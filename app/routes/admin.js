module.exports = function (app) {
    app.get('/form_add_noticia', function(req, res){
        res.render('admin/form_add_noticia'); //Renderiza a tela.
    });
    app.post('/noticias/salvar', function(req, res){
        var noticias = req.body;
        res.send(noticias); //Renderiza a tela.
    });
}