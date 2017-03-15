function Home(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;
    var connection = this._app.config.db();
    this._NoticiaDAO = new this._app.application.models.NoticiaDAO(connection);
}

Home.prototype.index = function(){
    var res = this._res;
    this._NoticiaDAO.getAll(function (erro, result) {
        if(!result.length){
            result[0] = {};
        }
        res.render('home/index', {noticias: result}); //Renderiza a tela.
    }, 5);
}

module.exports = function(){
    return Home;
}