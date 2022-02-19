"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthLogin = require('../controllers/AuthLoginController');
var router = express_1.Router();
router.post('/login', AuthLogin);
module.exports = router;
