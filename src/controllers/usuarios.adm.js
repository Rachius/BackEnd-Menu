import userModel from "../models/user.model.js"

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