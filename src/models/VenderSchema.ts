import { Schema } from "mongoose";

const VenderSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome do vendedor é obrigatório!"],
    },
    valor: {
      type: Number,
      min: [500, "Valor mínimo de parcela é R$ 500,00"],
      required: [true, "O valor da venda é obrigatório!"],
    },
    status: {
      type: String,
      enum: ["À VENDA", "VENDIDO"],
      uppercase: true,
    },
    endereço: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    },
    cep: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    },
    data: {
      type: Date,
      required: [true, "O campo data é obrigatório!"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    }
  },
  {
    timestamps: true,
  }
);

export{VenderSchema}; 