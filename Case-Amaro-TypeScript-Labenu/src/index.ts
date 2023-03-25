import { PingRouter } from './Routers/PingRouter';
import { ProductRouter } from './Routers/ProductRouter';
import { UserRouter } from './Routers/UserRouters';
import app  from "./app"




app.use("/ping",PingRouter)
app.use("/users", UserRouter)
app.use("/products", ProductRouter)