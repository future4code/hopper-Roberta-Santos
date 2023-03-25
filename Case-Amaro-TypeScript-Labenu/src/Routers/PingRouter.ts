import { Router } from "express";
import { PingBusiness } from "../business/PingBusiness";
import { PingController } from '../controller/PingController';



export const PingRouter = Router()

const pingControler = new PingController(
    new PingBusiness()
)

PingRouter.get("/", pingControler.ping)