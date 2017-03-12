module.exports = function (app) {

    app.get('/noticia', function(req, res){
        var connection = app.config.db();
        var noticiasModels = app.app.models.noticiasModel();
        noticiasModels.getNoticia(connection, function (erro, result) {
            res.render('noticias/noticia', {noticia: result[0]}); //Renderiza a tela.
        });
    });
}