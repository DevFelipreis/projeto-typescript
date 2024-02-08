
import "dotenv/config";

import express from "express";
import rotas from "./rotas";

const port = process.env.PORT

const app = express();

app.use(express.json());

app.use(rotas)

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
})



