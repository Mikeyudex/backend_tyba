"use strict";
var mongoose = require('mongoose');
var connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
var uri = "mongodb+srv://davierperez:e63EtEDOooZHBtlF@ludycomdev.3gvqs.mongodb.net/prueba_tyba?retryWrites=true&w=majority";
mongoose.connect(uri, connectionParams)
    .then(function (db) {
    console.log("Db Is connected to " + db.connection.host);
})
    .catch(function (err) { return console.error("[ERROR] - Ha ocurrido un error al intentar abrir la conexi\u00F3n: " + err); });
