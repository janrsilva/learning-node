var app = require("./config/server");

/**
 * Inicia o servidor na porta 80
 */
app.listen(8080, function(){ 
    console.log('Servidor Iniciado');
});