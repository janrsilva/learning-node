var mysql = require('mysql');

var connect = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    return connect; //Atribui funcão de conexão ao exports
};