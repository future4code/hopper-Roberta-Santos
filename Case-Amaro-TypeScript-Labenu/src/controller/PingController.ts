import { Request, Response } from 'express';
import { PingBusiness } from '../business/PingBusiness';
import { BaseErro } from '../erros/BaseErros';



export class PingController {
    constructor(
        private pingController: PingBusiness
    ){}

    public ping = async (req:Request, res: Response)=>{

        try {
            const result = await this.pingController.ping()

            res.status(200).send(result)
        } catch (error: unknown) {
            if(error instanceof BaseErro){
                res.status(error.statusCode).send({message:error.message})

            }
             res.status(500).send({message: "Erro ao cadastrar."})
        }
    }
}