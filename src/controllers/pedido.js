import pedidoModel  from "../models/pedido.model.js";

const pedido = {}


pedido.crearPedido = async (req,res)=>{
    try{
        const nuevoPedido = new pedidoModel({
            idmenu:req.body.idmenu,
            cantidad:req.body.cantidad,
            subtotal:req.body.subtotal

        })
        await nuevoPedido.save()
        res.status(201).json({
            mensaje:"Agregado al carrito"
           })
    }catch(error){
        console.log(error)
        res.status(404)
    }
}


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