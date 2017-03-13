module.exports = function (app) {
    app.get('/form_add_noticia', function(req, res){
        res.render('admin/form_add_noticia'); //Renderiza a tela.
    });
    app.post('/noticias/salvar', function(req, res){
        var newNoticia = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('conteudo', 'Conteudo é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: "YYYY-MM-DD"});

        if(req.validationErrors()){
            res.render('admin/form_add_noticia'); //Renderiza a tela.
            return;
        }

        var connection = app.config.db();
        var NoticiaDAO = new app.app.models.NoticiaDAO(connection);
        NoticiaDAO.save(newNoticia, function (erro, result) {
            res.redirect('/noticias');
        });
    });
}