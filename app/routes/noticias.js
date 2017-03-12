module.exports = function (app) {
    app.get('/noticias', function(req, res){
        var connection = app.config.db();
        var NoticiaDAO = new app.app.models.NoticiaDAO(connection);
        NoticiaDAO.getAll(function (erro, result) {
            res.render('noticias/noticias', {noticias: result}); //Renderiza a tela.
        });
    });
}