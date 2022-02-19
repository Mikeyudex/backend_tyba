import { Response } from "express";
import VerifyToken from "../middlewares/verifyToken";
import { DaoTransactions } from '../dao/DaoTransactions';

const verifyToken = new VerifyToken();
const daoTransactions : DaoTransactions = new DaoTransactions();

const HistoricalTransactions = async (req: any, res: Response) => {
    try {
        let decode: any = await verifyToken.verify(req.token);
        let responseDao:any = await daoTransactions.getTransactionByUsername(decode.username);
        res.status(200).json(
            {
                historical: responseDao,
                error: false
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                message: "Ha ocurrido un error interno",
                error: true
            }
        )
    }



}

module.exports = {
    HistoricalTransactions
}