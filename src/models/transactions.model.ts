import { Schema, model } from "mongoose";

const TransactionSchema = new Schema(
  {
    lon: {
        type: String
    },
    lat: {
        type: String
    },
    limit:{
        type : Number,
        default: 0
    },
    username: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Transaction", TransactionSchema);