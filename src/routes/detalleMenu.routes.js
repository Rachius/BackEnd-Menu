import { Router } from "express";
import Menu from "../controllers/detalle.menu.js";

const routerMenu = Router()

routerMenu.post('/crearMenu',Menu.crearMenu)
routerMenu.get('/listarMenu',Menu.listarMenu)

routerMenu.route("/:_id")
.delete(Menu.eliminarMenu)
.put(Menu.editarMenu)
.get(Menu.verMenu)

export default routerMenu