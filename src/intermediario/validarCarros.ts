import { Request, Response } from "express";
import { knex } from "../bancoDeDados/conexao";
import { Marca } from "../tipos";

export const listarMarcaCarros = async (req: Request, res: Response, next: Function) => {
    const { marca } = req.body;

    try {
        const marcaLowerCase = marca.toLowerCase()
        const carros = await knex<Marca>("marca_carros").select("*");
        const marcas = carros.map(carro => carro.marca);

        if (!marcas.includes(marcaLowerCase)) {
            return res.status(404).json(`Marca não encontrada. Cadastre uma dessas marcas: ${marcas}`);
        }

        next();

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }
};

export const listarMarcaCarrosExistente = async (req: Request, res: Response, next: Function) => {
    const { marca } = req.body;

    try {
        const marcaLowerCase = marca.toLowerCase()
        const carros = await knex<Marca>("marca_carros").select("*");
        const marcas = carros.map(carro => carro.marca);

        if (marcas.includes(marcaLowerCase)) {
            return res.status(404).json(`Marca já cadastrada`);
        }

        next();

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json("Erro inesperado");
        }
        return res.status(400).json("Erro inesperado");
    }
};