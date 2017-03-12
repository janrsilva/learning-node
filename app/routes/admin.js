module.exports = function (app) {
    app.get('/form_add_noticia', function(req, res){
        res.render('admin/form_add_noticia'); //Renderiza a tela.
    });
    app.post('/noticias/salvar', function(req, res){
        var newNoticia = req.body;
        var connection = app.config.db();
        var noticiasModels = app.app.models.noticiasModel();
        noticiasModels.saveNoticia(newNoticia, connection, function (erro, result) {
            res.redirect('/noticias');
        });
    });
}