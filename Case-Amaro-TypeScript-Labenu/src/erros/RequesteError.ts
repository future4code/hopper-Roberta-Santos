import { BaseErro } from "./BaseErros";


export class RequesteErros extends BaseErro {
    constructor(
        message: string = "Requisição invalida."
    ){
        super(400, message)
    }
}