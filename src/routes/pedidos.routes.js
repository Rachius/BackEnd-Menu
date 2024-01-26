import { Router } from "express";
import { autRequired } from "../middlewares/validateToken.js";
import pedido from "../controllers/pedido.js";

const Routerpedido = Router()


Routerpedido.post('/pedido',pedido.crearPedido)
Routerpedido.route("/:_id")
.put(pedido.editarPedido)
.get(pedido.verPedido)
Routerpedido.get('/listarPedido', pedido.listarPedido);

export default Routerpedido