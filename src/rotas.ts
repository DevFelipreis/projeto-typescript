import { Router } from "express";
import {
    atualizarCarros,
    cadastrarCarros,
    detalharCarros,
    excluirCarros,
    listarCarros
} from "./controladores/carros";
import { listarMarcaCarros, listarMarcaCarrosExistente } from "./intermediario/validarCarros";
import { cadastrarMarca, listarMarcas } from "./controladores/marca";


const rotas = Router();


rotas.get("/carros", listarCarros);
rotas.get("/marcas", listarMarcas);
rotas.get("/carros/:id", detalharCarros);
rotas.post("/marca", listarMarcaCarrosExistente, cadastrarMarca);
rotas.post("/carros", listarMarcaCarros, cadastrarCarros);
rotas.put("/carros/:id", listarMarcaCarros, atualizarCarros);
rotas.delete("/carros/:id", excluirCarros);


export default rotas;