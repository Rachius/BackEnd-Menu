import mongoose, { Mongoose, Schema } from "mongoose";

const detalleMenuSchema = new Schema({
    tituloMenu:{
        type: String,
        require : true

    },
    imagenMenu:{
        type: String,
        require: false
    },
    precioMenu:{
        type: Number,
        require: true
    },
    descripcionMenu:{
        type: String,
        require:true

    },
    estado:{
        type: Boolean,
        require:false
    }
})

const detalleMenuModel = mongoose.model("Menu",detalleMenuSchema)

export default detalleMenuModel