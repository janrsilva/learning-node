function Home(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;
}

Home.prototype.index = function(){
    this._res.render('home/index'); //Renderiza a tela.
}

module.exports = function(){
    return Home;
}