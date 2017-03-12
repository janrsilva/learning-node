module.exports = function (app) {
    
    app.get('/noticias', function(req, res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });
        connection.query('select * from noticias', function (erro, result) {
            res.send(result); 
        });
        // res.render('noticias/noticia'); //Renderiza a tela.
    });
}