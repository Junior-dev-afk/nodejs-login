import express from "express"


const app = express()
const port = 5000


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


export default app