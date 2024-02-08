"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarMarca = exports.listarMarcas = void 0;
const conexao_1 = require("../bancoDeDados/conexao");
const listarMarcas = async (req, res, next) => {
    try {
        const marca = await (0, conexao_1.knex)("marca_carros").select("*");
        return res.status(200).json(marca);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.listarMarcas = listarMarcas;
const cadastrarMarca = async (req, res) => {
    const marca = req.body.marca.toLowerCase();
    try {
        const marcas = await (0, conexao_1.knex)("marca_carros").insert({
            marca,
        });
        if (!marcas) {
            return res.status(400).json({ mensagem: "Todos os campos precisam ser preenchidos" });
        }
        return res.status(201).json(marcas);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.cadastrarMarca = cadastrarMarca;
