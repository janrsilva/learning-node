var app = require("./config/server");

require("./app/routes/form_add_noticia")(app);
require("./app/routes/home")(app);
require("./app/routes/noticias")(app);

/**
 * Inicia o servidor na porta 80
 */
app.listen(80, function(){ 
    console.log('servidor iniciado');
});