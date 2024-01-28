import pedidoModel  from "../models/pedido.model.js";

const pedido = {}


pedido.crearPedido = async (req, res) => {
    try {
      const nuevoPedido = new pedidoModel({
        username: req.body.username,
        total: req.body.total,
        items: req.body.items, // El campo items ahora es un array de objetos
      });
  
      await nuevoPedido.save();
  
      res.status(201).json({
        mensaje: "Pedido realizado",
        pedido: nuevoPedido,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error al procesar el pedido" });
    }
  };

pedido.editarPedido = async(req,res)=>{
    try {
        await pedidoModel.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json("Pedido editado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

pedido.verPedido= async(req,res)=>{
    try {
        const verPedido= await pedidoModel.findById(req.params._id)
        res.status(200).json(verPedido)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


pedido.listarPedido= async(req,res)=>{
    try {
        const verListaPedido= await pedidoModel.find()
        res.status(200).json(verListaPedido)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

export default pedido