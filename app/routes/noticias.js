module.exports = function (app) {

    app.get('/noticias', function(req, res){
        var connection = app.config.db();
        connection.query('select * from noticias', function (erro, result) {
            res.render('noticias/noticia', {noticia: result}); //Renderiza a tela.
        });
    });
}