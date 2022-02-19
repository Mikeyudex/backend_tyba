"use strict";
//Valida si el usuario ingresa Token 
var ValidarToken = function (req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        req.token = bearer[1];
        next();
    }
    else {
        res.status(403).json({ message: 'Se debe proporcionar un token.' });
    }
};
module.exports = ValidarToken;
