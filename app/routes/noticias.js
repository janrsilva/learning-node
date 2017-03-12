var dbConnection = require('../../config/db');

module.exports = function (app) {
    var connection = dbConnection();

    app.get('/noticias', function(req, res){
        connection.query('select * from noticias', function (erro, result) {
            res.render('noticias/noticia', {noticia: result}); //Renderiza a tela.
        });
    });
}