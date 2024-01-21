import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import routerMenu from './routes/detalleMenu.routes.js'
import Routerpedido from './routes/pedidos.routes.js'
import routerUserAdmin from './routes/usuarioadmin.routes.js'
import cors from 'cors'
const app = express()


app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api/admMenu", routerMenu )
app.use("/api/admPedidos",Routerpedido)
app.use("/api/admUser",routerUserAdmin)


export default app

