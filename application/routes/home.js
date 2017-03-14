module.exports = function (app) {
    app.get('/', function(req, res){
        new app.application.controllers.Home(app, req, res).index();
    });
}