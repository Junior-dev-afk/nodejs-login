import database from "../database/database.js";


class Register {

    constructor () {}

    async __verifyUserExist (user) {

        const connect = await database.getDatabaseConnection()

        const response = await connect.all("SELECT * FROM users WHERE user = ?", [user])
        
        await connect.close();

        return response

    }

    async register (user, senha) {

        const exists = await this.__verifyUserExist(user)

        if ( exists.length > 0 ) {
            return false
        }

        await database.addAccount(user, senha)

        return true

    }

}

const register = new Register()

export default register