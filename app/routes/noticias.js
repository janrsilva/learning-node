module.exports = function (app) {
    app.get('/noticias', function(req, res){
        var connection = app.config.db();
        var noticiasModels = app.app.models.noticiasModel();
        noticiasModels.getNoticias(connection, function (erro, result) {
            res.render('noticias/noticias', {noticias: result}); //Renderiza a tela.
        });
    });
}