import { Cliente } from "./Cliente";
import { VenderImp } from "./VenderImp";

export class OperacaoImp{

    _id!: String;
    cliente!: Cliente;
    vendas!: VenderImp[];
    createdAt?: Date;
    updatedAt?: Date;
}