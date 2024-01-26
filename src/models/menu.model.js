import mongoose, { Mongoose, Schema } from "mongoose";







const detalleMenuSchema = new Schema({
    tituloMenu:{
        type: String,
        require : true

    }, 
    descripcionMenu:{
        type: String,
        require:true

    },
    categoriaMenu:{
        type: String,
        require:true

    },
    precioMenu:{
        type: Number,
        require: true
    },
    estado:{
        type: Boolean,
        require:false
    }
},{
    timestamps : true
})

const detalleMenuModel = mongoose.model("Menu",detalleMenuSchema)

export default detalleMenuModel