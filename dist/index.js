"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors = require('cors');
var app = express_1.default();
require('dotenv').config();
var serviceRoutes = require('./routes/index.routes');
var userRoutes = require('./routes/users.routes');
var validateToken = require('./middlewares/validateToken');
var routerAuth = require('./routes/auth.routes');
app.use(body_parser_1.default.json());
app.use(cors());
//Up Server
app.listen(process.env.PORT, function () {
    console.log("Server on port 2500");
});
//Require Connection Database
require('./connectors/Mongo');
app.get('/', function (req, res) {
    res.status(200).send("API - Service Up\n        " + new Date().toLocaleString() + " (PORT: " + process.env.PORT + ")");
});
//Register User
app.use("/users", userRoutes);
//Routes Authorization
app.use('/authorization', routerAuth);
//Api
app.use("/service/v1", validateToken, serviceRoutes);
