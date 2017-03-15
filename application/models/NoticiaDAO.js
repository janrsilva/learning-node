function NoticiaDAO(connection) {
    this._connection = connection;
    this._table = 'noticias';
}

NoticiaDAO.prototype.find = function(id, callback){
     this._connection.query('select * from ' + this._table + ' where id = '+ id, callback);
}

NoticiaDAO.prototype.getAll = function(callback){
     this._connection.query('select * from ' + this._table, callback);
}

NoticiaDAO.prototype.save = function(newNoticia, callback){
    //insert já identifica as chaves do json e monta a query equivalente para persistir.
    //importante que as chaves estejam de acordo com as colunas do banco.
     this._connection.query('insert into ' + this._table + ' set ?', newNoticia, callback); 
}

module.exports = function(){
    return NoticiaDAO;
}