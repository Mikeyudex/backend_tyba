import User from "../models/user.model";



export class DaoUsers{


    public createUser(data:any){

        return new Promise<string>(async(resolve, reject)=> {
            try {
                const user = new User(data);
                await user.save();
                resolve('User created!')
                
              } catch (error) {
                console.log(error);
                reject(error)
              }
        })
        


    }

    public getUserByUsername(username:string){

    }

}