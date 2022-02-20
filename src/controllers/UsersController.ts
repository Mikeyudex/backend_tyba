import { DaoUsers } from '../dao/DaoUsers';
import { Response } from 'express';
const { hashedPassword } = require('../utils/hashedPassword');
const users = new DaoUsers();


const createUser = async (req: any, res: Response) => {

    try {
        const {username, email, password} = req.body;
        let passwordHashed: string = await hashedPassword(password);
        let responseUser: string = await users.createUser({
            username, email, password: passwordHashed
        })
        res.status(200).json(
            {
                message: responseUser,
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
    createUser
}