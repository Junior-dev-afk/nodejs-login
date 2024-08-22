import app from "./run.js"


import express from "express"
import path from "path"
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.set('views', path.join(__dirname, 'app/views/templates'))
app.use(express.static(path.join(__dirname, 'app/views/statics')))
app.use('/statics', express.static(path.join(__dirname, 'app/views/statics')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


import rotas from "./app/controllers/rotas/rotas.js"
import rotasFuncoes from "./app/controllers/funcoes/login.js"


rotas.gerarRotasTemplates()
rotasFuncoes.gerarTodasRotasFuncoes()
