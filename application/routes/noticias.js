module.exports = function (app) {
    app.get('/noticias', function(req, res){
        new app.application.controllers.Noticias(app, req, res).list();
    });

    app.get('/noticias/:id', function(req, res){
        new app.application.controllers.Noticias(app, req, res).get(req.params.id);
    });
    
    app.get('/form_add', function(req, res){
        new app.application.controllers.Noticias(app, req, res).formAdd();
    });
    
    app.post('/noticias/salvar', function(req, res){
        new app.application.controllers.Noticias(app, req, res).save();
    });
}