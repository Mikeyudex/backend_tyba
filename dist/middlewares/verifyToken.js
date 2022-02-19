"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var jwt = require('jsonwebtoken');
var confs = require('../configs/confs');
var VerifyToken = /** @class */ (function () {
    function VerifyToken() {
    }
    /**
     * Verifica si el token es valido.
     * @param {string} token
    */
    VerifyToken.prototype.verify = function (token) {
        return new Promise(function (resolve, reject) {
            jwt.verify(JSON.parse(token), confs.secretKey, function (err, data) {
                if (err) {
                    console.log(err);
                    reject();
                }
                else {
                    var decode = jwt_decode_1.default(token);
                    resolve(decode);
                }
            });
        });
    };
    return VerifyToken;
}());
exports.default = VerifyToken;
