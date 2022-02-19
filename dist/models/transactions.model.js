"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TransactionSchema = new mongoose_1.Schema({
    lon: {
        type: String
    },
    lat: {
        type: String
    },
    limit: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.model("Transaction", TransactionSchema);
