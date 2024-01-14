import detalleMenuModel from "../models/menu.model.js";

const Menu = {}

Menu.crearMenu = async (req,res)=>{
    try{
        const nuevoMenu = new detalleMenuModel({
            tituloMenu:req.body.tituloMenu,
            imagenMenu:req.body.imagenMenu,
            precioMenu:req.body.precioMenu,
            descripcionMenu:req.body.descripcionMenu,
            estado:req.body.estado
        })
        await nuevoMenu.save()
        res.status(201).json({
            mensaje:"Plan registrado"
           })
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

Menu.eliminarMenu = async(req,res)=>{
    try {
        await detalleMenuModel.findByIdAndDelete(req.params._id)
        res.status(200).json("Producto eliminado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

Menu.editarMenu = async(req,res)=>{
    try {
        await detalleMenuModel.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json("Producto editado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

Menu.verMenu= async(req,res)=>{
    try {
        const verMenu= await detalleMenuModel.findById(req.params._id)
        res.status(200).json(verMenu)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

Menu.listarMenu= async(req,res)=>{
    try {
        const verListaMenu= await detalleMenuModel.find()
        res.status(200).json(verListaMenu)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

export default Menu