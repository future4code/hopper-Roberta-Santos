import { BaseErro } from './../erros/BaseErros';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, UserSignInputDTO } from "../Model/user";



export class UserController{
    constructor(
        private userBusiness : UserBusiness
    ){}

    public signup = async ( req: Request, res: Response) =>{
        try {
            const {name, email, password} = req.body;

            const input: UserSignInputDTO = {
                name,
                email,
                password,
            };

            const response = await this.userBusiness.signup(input)
            res.status(201).send(response)

        } catch (error:unknown) {
            if (error instanceof BaseErro) {
                return res.status(400).send({message:error.message})
            }
            res.status(500).send({message: "Erro inesperado ao cadastrar usuário!"})
        }
    }

    public login =async (req:Request, res:Response) => {
        try {
            const input:ILoginInputDTO = {
                email: req.body.email,
                password:req.body.password
            }

            const response = await this.userBusiness.login(input)
            res.status(200).send(response)

        } catch (error:unknown) {
            if(error instanceof BaseErro){
                return res.status(error.statusCode).send({message:error.message})
            }

            res.status(500).send({message: "Erro ao logar!"})
        }
    }
}
