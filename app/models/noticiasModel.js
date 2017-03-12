module.exports = function(){
    this.getNoticias = function(connection, callback){
         connection.query('select * from noticias', callback);
    }
    this.getNoticia = function(connection, callback){
         connection.query('select * from noticias where id = 2', callback);
    }
    this.saveNoticia = function(newNoticia, connection, callback){
        //insert já identifica as chaves do json e monta a query equivalente para persistir.
        //importante que as chaves estejam de acordo com as colunas do banco.
        connection.query('insert into noticias set ?', newNoticia, callback); 
    }
    return this;
}