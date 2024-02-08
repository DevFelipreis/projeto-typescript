"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarMarcaCarrosExistente = exports.listarMarcaCarros = void 0;
const conexao_1 = require("../bancoDeDados/conexao");
const listarMarcaCarros = async (req, res, next) => {
    const { marca } = req.body;
    try {
        const marcaLowerCase = marca.toLowerCase();
        const carros = await (0, conexao_1.knex)("marca_carros").select("*");
        const marcas = carros.map(carro => carro.marca);
        if (!marcas.includes(marcaLowerCase)) {
            return res.status(404).json(`Marca não encontrada. Cadastre uma dessas marcas: ${marcas}`);
        }
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }
};
exports.listarMarcaCarros = listarMarcaCarros;
const listarMarcaCarrosExistente = async (req, res, next) => {
    const { marca } = req.body;
    try {
        const marcaLowerCase = marca.toLowerCase();
        const carros = await (0, conexao_1.knex)("marca_carros").select("*");
        const marcas = carros.map(carro => carro.marca);
        if (marcas.includes(marcaLowerCase)) {
            return res.status(404).json(`Marca já cadastrada`);
        }
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }
};
exports.listarMarcaCarrosExistente = listarMarcaCarrosExistente;
