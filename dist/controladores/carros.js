"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCarros = exports.atualizarCarros = exports.cadastrarCarros = exports.detalharCarros = exports.listarCarros = void 0;
const conexao_1 = require("../bancoDeDados/conexao");
const listarCarros = async (req, res) => {
    try {
        const carros = await (0, conexao_1.knex)("carros").select("*");
        if (carros.length === 0) {
            return res.status(204).json({ mensagem: "Nenhum carro encontrado" });
        }
        return res.status(200).json(carros);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.listarCarros = listarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)("carros").where({ id }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        return res.status(200).json(carro);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.detalharCarros = detalharCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)("carros").insert({
            marca: marca.toLowerCase(),
            modelo: modelo.toLowerCase(),
            ano,
            cor: cor.toLowerCase(),
            valor,
        }).returning("*");
        console.log(carro);
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(400).json({ mensagem: "Todos os campos precisam ser preenchidos" });
        }
        return res.status(201).json(carro[0]);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.cadastrarCarros = cadastrarCarros;
const atualizarCarros = async (req, res) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)("carros")
            .update({
            marca: marca.toLowerCase(),
            modelo: modelo.toLowerCase(),
            ano,
            cor: cor.toLowerCase(),
            valor,
        })
            .where({ id });
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(400).json({ mensagem: "Todos os campos precisam ser preenchidos" });
        }
        return res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.atualizarCarros = atualizarCarros;
const excluirCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)("carros").delete().where({ id });
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado" });
        }
        return res.status(201).json({ mensagem: "Carro atualizado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
exports.excluirCarros = excluirCarros;
