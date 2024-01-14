import { Router } from "express";
import usuarioAdm from "../controllers/usuarios.adm.js";
import { autRequired } from "../middlewares/validateToken.js";

const routerUserAdmin = Router()

routerUserAdmin.get('/listarUsuarios',usuarioAdm.listaUsuario)

routerUserAdmin.route("/:_id")
.put(usuarioAdm.editarUsuario)
.get(usuarioAdm.verUsuario)

export default routerUserAdmin