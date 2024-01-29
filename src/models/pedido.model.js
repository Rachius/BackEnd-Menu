import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const pedidoSchema = new Schema({
    id: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    total: {
      type: Number,
      required: true,
    },
    items: [
      {
        idmenu: {
          type: String,
          required: false,
        },
        tituloMenu: {
          type: String,
          required: true,
        },
        precioMenu: {
          type: Number,
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
        },
      },
    ],
    estado: {
      type: String,
      enum: ['pendiente', 'realizado'],
      default: 'pendiente',
    },
    fechaPedido: {
      type: Date,
      default: Date.now,
    },
  });
  

const pedidoModel = mongoose.model("Pedido", pedidoSchema);

export default pedidoModel;