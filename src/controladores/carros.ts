import { Request, Response } from "express";
import { knex } from "../bancoDeDados/conexao";

export const listarCarros = async (req: Request, res: Response) => {
    try {
        const carros = await knex("carros").select("*");

        if (carros.length === 0) {
            return res.status(204).json("Nenhum carro encontrado");
        }
        return res.status(200).json(carros);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }

};

export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const carro = await knex("carros").where({ id }).first();
        if (!carro) {
            return res.status(404).json("Carro não encontrado");
        }
        return res.status(200).json(carro);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }

};

export const cadastrarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, ano, cor, valor } = req.body;

    try {
        const carro = await knex("carros").insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        });

        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(400).json("Todos os campos precisam ser preenchidos");
        }
        return res.status(201).json("Carro cadastrado com sucesso");

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }
};


export const atualizarCarros = async (req: Request, res: Response) => {

};


export const excluirCarros = async (req: Request, res: Response) => {

};