import { Request, Response } from "express";
import Locação from "../models/LocaçãoSchema";


class AlugarController {
  static editar(arg0: string, editar: any) {
      throw new Error("Method not implemented.");
  }

  // CADASTRAR
  async alugar(request: Request, response: Response) {
    try {
      const novoAlugar = await Locação.create(request.body);
      response.status(201).json({data: novoAlugar, error: false, msg: "Aluguel cadastrado com sucesso!",});
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o Aluguel",
      });
    }
  }

  //LISTAR
  async listarAlugar(request: Request, response: Response) {
    try {
      const LOCAÇÃO = await Locação.find();
      response.status(200).json({ data: LOCAÇÃO, error: false, msg: "LOCAÇÃO encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }

  async listarAlugarId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const LOCAÇÃO = await Locação.findById({_id : id});
      response.status(200).json({ data: LOCAÇÃO, error: false, msg: "LOCAÇÃO encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }


  //DELETE
  async deletarAlugar(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const locação = await Locação.deleteOne({_id : id});
      response.status(200).json({data: locação, error: false, msg: "Registro deletado",});
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar o registro", });
    }
  }

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await Locação.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false,
        useFindAndModify: false,
      });

      response.status(204).json({});
    } catch (error) {
      response.status(400).json({
        error: true,
        data: error.message,
        msg: "Não foi possível concluir esta edição.",
      });
    }
  }
}

  
export {AlugarController};
