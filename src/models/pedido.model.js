import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
    items: [
        {
            idmenu: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Menu',
                required: true
            },
            cantidad: {
                type: Number,
                required: true
            },
            subtotal: {
                type: Number,
                required: true
            }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'realizado'],
        default: 'pendiente'
    },
    fechaPedido: {
        type: Date,
        default: Date.now
    }
});

const pedidoModel = mongoose.model("Pedido", pedidoSchema);

export default pedidoModel;