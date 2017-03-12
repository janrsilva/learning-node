module.exports = function (app) {
    app.get('/noticia', function(req, res){
        var connection = app.config.db();
        var NoticiaDAO = new app.app.models.NoticiaDAO(connection);
        NoticiaDAO.find(function (erro, result) {
            res.render('noticias/noticia', {noticia: result[0]}); //Renderiza a tela.
        });
    });
}