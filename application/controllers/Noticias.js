function Noticias(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;
    var connection = this._app.config.db();
    this._NoticiaDAO = new this._app.application.models.NoticiaDAO(connection);
}

Noticias.prototype.list = function(){
    var res = this._res;
    this._NoticiaDAO.getAll(function (erro, result) {
        res.render('noticias/noticias', {noticias: result}); //Renderiza a tela.
    });
}

Noticias.prototype.get = function(){
    var res = this._res;
    this._NoticiaDAO.find(function (erro, result) {
        res.render('noticias/noticia', {noticia: result[0]}); //Renderiza a tela.
    });
}

Noticias.prototype.formAdd = function(){
    this._res.render('admin/form_add_noticia', {errors: {}, noticia: {}}); //Renderiza a tela.
}

Noticias.prototype.save = function(){
    var newNoticia = this._req.body;

    this._req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    this._req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    this._req.assert('resumo', 'Resumo é deve ter tamanho entre 10 e 100 caracteres').len(10, 100);
    this._req.assert('autor', 'Autor é obrigatório').notEmpty();
    this._req.assert('conteudo', 'Conteudo é obrigatório').notEmpty();
    this._req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    this._req.assert('data_noticia', 'Data tem formato inválido').isDate({format: "YYYY-MM-DD"});

    if(errors = this._req.validationErrors()){
        this._res.render('admin/form_add_noticia', {errors: errors, noticia: newNoticia}); //Renderiza a tela.
        return;
    }

    var res = this._res;
    this._NoticiaDAO.save(newNoticia, function (erro, result) {
        res.redirect('/noticias');
    });
}

module.exports = function(){
    return Noticias;
}