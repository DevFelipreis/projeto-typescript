import { Router } from "express";
import {
    atualizarCarros,
    cadastrarCarros,
    cadastrarMarca,
    detalharCarros,
    excluirCarros,
    listarCarros,
    listarMarcas
} from "./controladores/carros";
import { listarMarcaCarros, listarMarcaCarrosExistente } from "./intermediario/validarCarros";


const rotas = Router();


rotas.get("/carros", listarCarros);
rotas.get("/marcas", listarMarcas);
rotas.get("/carros/:id", detalharCarros);
rotas.post("/marca", listarMarcaCarrosExistente, cadastrarMarca);
rotas.post("/carros", listarMarcaCarros, cadastrarCarros);
rotas.put("/carros/:id", listarMarcaCarros, atualizarCarros);
rotas.delete("/carros/:id", excluirCarros);


export default rotas;