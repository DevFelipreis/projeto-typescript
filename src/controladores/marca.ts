import { Request, Response } from "express";
import { knex } from "../bancoDeDados/conexao";
import { Marca } from "../tipos";


export const listarMarcas = async (
    req: Request,
    res: Response,
    next: Function
) => {
    try {
        const marca = await knex<Marca>("marca_carros").select("*");
        return res.status(200).json(marca);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
export const cadastrarMarca = async (req: Request, res: Response) => {
    const marca = req.body.marca.toLowerCase();

    try {
        const marcas = await knex<Omit<Marca, "id">>("marca_carros").insert({
            marca,
        });

        if (!marcas) {
            return res.status(400).json({ mensagem: "Todos os campos precisam ser preenchidos" });
        }
        return res.status(201).json(marcas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ mensagem: "Erro inesperado" });
        }
        return res.status(400).json({ mensagem: "Erro inesperado" });
    }
};
