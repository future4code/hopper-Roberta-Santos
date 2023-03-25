import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UseController";
import { UserDataBase } from "../dataBase/UserDataBase";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGeneration } from "../Services/IdGeneration";



export const UserRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new IdGeneration(),
        new HashManager(),
        new Authenticator()
    )
)

UserRouter.post("/signup", userController.signup)
UserRouter.post("/login", userController.login)
