import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true

    },
    estado:{
        type: Boolean,
        required:false
        

    },
   
    rol: {
        type: String,
        required: false
       } 

},{
    timestamps : true
})


export default mongoose.model('Usuario', userSchema)


