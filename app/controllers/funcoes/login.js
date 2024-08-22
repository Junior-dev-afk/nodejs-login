import app from "../../../run.js"
import login from "../../models/login/login.js"
import register from "../../models/login/register.js"


class Rotas {

    constructor(){}

    gerarTodasRotasFuncoes () {

        app.post("/verifyLogin", async (req, res) => {

            const user = req.body.user
            const senha = req.body.senha

            const response = await login.verifyLogin(user, senha)

            res.send(JSON.stringify({ response : response}))

        })

        app.post("/register", async (req, res) => {

            const user = req.body.user
            const senha = req.body.senha

            const response = await register.register(user, senha)

            res.send(JSON.stringify({ response : response}))

        })

    }

}

const rotas = new Rotas()

export default rotas