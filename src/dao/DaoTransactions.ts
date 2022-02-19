import Transaction from '../models/transactions.model';
import { typesTransaction } from '../interfaces/typesTransaction';

export class DaoTransactions {


  public createTransaction(data: typesTransaction) {

    return new Promise<string>(async (resolve, reject) => {
      try {
        const transaction = new Transaction(data);
        await transaction.save();
        resolve('Transaction created!')

      } catch (error) {
        console.log(error);
        reject(error)
      }
    })
  }

  public async getTransactionByUsername(username: string) {
    return new Promise<any>((resolve, reject) => {
      try {
        Transaction.find({ username }, (error, transactions: any) => {
          if (error) reject(error);
          resolve(transactions)
        })
        
      } catch (error) {
        console.log(error);
        reject(error)
      }
    })


  }

}