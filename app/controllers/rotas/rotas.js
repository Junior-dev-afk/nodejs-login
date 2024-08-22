import app from "../../../run.js"
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


class GerarRotas {

    constructor(){}

    gerarRotasTemplates () {

        app.get('/', (_, res) => {
            res.sendFile(path.join(__dirname, '../../views/templates/home', 'index.html'))
        });

        app.get('/home', (_, res) => {
            res.sendFile(path.join(__dirname, '../../views/templates/home', 'index.html'))
        });

        app.get('/login', (_, res) => {
            res.sendFile(path.join(__dirname, '../../views/templates/login', 'login.html'))
        });

        app.get('/register', (_, res) => {
            res.sendFile(path.join(__dirname, '../../views/templates/register', 'register.html'))
        });

    }

}

const rotas = new GerarRotas()

export default rotas
