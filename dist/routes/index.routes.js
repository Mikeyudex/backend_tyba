"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var searchPlacesController = require('../controllers/SearchPlacesController').searchPlacesController;
var HistoricalTransactions = require('../controllers/HistoricalTransactions').HistoricalTransactions;
var router = express_1.default.Router();
var validateDataRequest = require('../middlewares/validateDataRequest');
router.get("/searchByCoords", validateDataRequest, searchPlacesController);
router.get("/historical", HistoricalTransactions);
module.exports = router;
