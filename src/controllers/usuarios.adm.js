import userModel from "../models/user.model.js"
import Usuario from "../models/user.model.js"
import bcrypt from 'bcryptjs'




export const admRegister = async (req,res) => {
    const {username,email,password} = req.body
    try {
            const userFound = await  Usuario.findOne({username})
            if (userFound) 
            return  res.status(400).json(["the username already exists"])
            const emailFound = await  Usuario.findOne({email})
                    if (emailFound) 
                    return  res.status(400).json(["the email already exists"])


            const passwordHash = await bcrypt.hash(password,10)

            const newUser = new Usuario({
                    username,
                    email,
                    password: passwordHash,
                    estado: true,
                    rol: "user"

            })
            
            
    
    
    
            const userSaved = await newUser.save()

            res.json(["Usuario creado con exito"])




    } catch (error) {
            res.status(500).json(error.message)
    }

   
       
}

const usuarioAdm = {}


usuarioAdm.editarUsuario = async (req, res) => {
    try {
        if (req.body.estado !== undefined) {
            await userModel.findByIdAndUpdate(req.params._id, { estado: req.body.estado }, { new: true });
            res.status(200).json("Estado actualizado con éxito");
        } else {
            if (req.body.password) {
                delete req.body.password;
            }
            
            const usuarioActualizado = await userModel.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );

            if (!usuarioActualizado) {
                return res.status(404).json("Usuario no encontrado");
            }

            res.status(200).json("Usuario editado con éxito");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Error interno del servidor");
    }
};



usuarioAdm.verUsuario= async(req,res)=>{
    try {
        const verUser= await userModel.findById(req.params._id)
        res.status(200).json(verUser)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

usuarioAdm.listaUsuario= async(req,res)=>{
    try {
        const verlistaUser= await userModel.find()
        res.status(200).json(verlistaUser)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}



export default usuarioAdm