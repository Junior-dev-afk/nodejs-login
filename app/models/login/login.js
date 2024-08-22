import database from "../database/database.js"


class Login {

    constructor () {}


    async verifyLogin (user, senha) {

        const connect = await database.getDatabaseConnection()

        const response = await connect.all("SELECT * FROM users WHERE user = ? AND senha = ?", [user, senha])
        
        await connect.close();

        return response

    }

}

const login = new Login()

export default login