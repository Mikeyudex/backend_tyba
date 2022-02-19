"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Valida información del request
var validateDataRequest = function (req, res, next) {
    var dataRequest = req.body;
    if (dataRequest.lat.length === 0 || dataRequest.lon.length === 0) {
        return res.status(500).json({
            message: 'Las propiedades lat y lon no pueden enviarse vacías.',
            error: true
        });
    }
    else {
        /* daoTransactions.createTransaction(). */
        next();
    }
};
module.exports = validateDataRequest;
