import { Request, Response } from "express";
import { knex } from "../bancoDeDados/conexao";
import { Carro } from "../tipos";

export const listarCarros = async (req: Request, res: Response,) => {
  try {
    const carros = await knex<Carro>("carros").select("*");

    if (carros.length === 0) {
      return res.status(204).json({ mensagem: "Nenhum carro encontrado" });
    }
    return res.status(200).json(carros);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ mensagem: "Erro inesperado" });
    }
    return res.status(400).json({ mensagem: "Erro inesperado" });
  }
};

export const detalharCarros = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const carro = await knex<Carro>("carros").where({ id }).first();
    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    }
    return res.status(200).json(carro);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ mensagem: "Erro inesperado" });
    }
    return res.status(400).json({ mensagem: "Erro inesperado" });
  }
};

export const cadastrarCarros = async (req: Request, res: Response) => {
  const { marca, modelo, ano, cor, valor } = req.body;

  try {
    const carro = await knex<Omit<Carro, "id">>("carros").insert({
      marca: marca.toLowerCase(),
      modelo: modelo.toLowerCase(),
      ano,
      cor: cor.toLowerCase(),
      valor,
    }).returning("*");
    console.log(carro)
    if (!marca || !modelo || !ano || !cor || !valor) {
      return res.status(400).json({ mensagem: "Todos os campos precisam ser preenchidos" });
    }
    return res.status(201).json(carro[0]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ mensagem: "Erro inesperado" });
    }
    return res.status(400).json({ mensagem: "Erro inesperado" });
  }
};
export const atualizarCarros = async (req: Request, res: Response) => {
  const { marca, modelo, ano, cor, valor } = req.body;
  const { id } = req.params;

  try {
    const carro = await knex<Carro>("carros")
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
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ mensagem: "Erro inesperado" });
    }
    return res.status(400).json({ mensagem: "Erro inesperado" });
  }
};
export const excluirCarros = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const carro = await knex<Carro>("carros").delete().where({ id });

    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    }
    return res.status(201).json({ mensagem: "Carro atualizado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ mensagem: "Erro inesperado" });
    }
    return res.status(400).json({ mensagem: "Erro inesperado" });
  }
};
