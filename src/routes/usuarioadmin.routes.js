import { Router } from "express";
import usuarioAdm from "../controllers/usuarios.adm.js";
import { autRequired } from "../middlewares/validateToken.js";
import { registerSchema } from "../schemas/auth.Schemas.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { admRegister } from "../controllers/usuarios.adm.js";

const routerUserAdmin = Router()

routerUserAdmin.get('/listarUsuarios',usuarioAdm.listaUsuario)
routerUserAdmin.post('/admRegister',validateSchema(registerSchema),admRegister)

routerUserAdmin.route("/:_id")
.put(usuarioAdm.editarUsuario)
.get(usuarioAdm.verUsuario)

export default routerUserAdmin