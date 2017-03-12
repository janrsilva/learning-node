module.exports = function (app) {
    app.get('/form_add_noticia', function(req, res){
        res.render('admin/form_add_noticia'); //Renderiza a tela.
    });
    app.post('/noticias/salvar', function(req, res){
        var newNoticia = req.body;
        var connection = app.config.db();
        var NoticiaDAO = new app.app.models.NoticiaDAO(connection);
        NoticiaDAO.save(newNoticia, function (erro, result) {
            res.redirect('/noticias');
        });
    });
}