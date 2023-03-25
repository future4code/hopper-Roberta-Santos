import { BaseErro } from "./BaseErros";


export class NotFoundErros extends BaseErro {
    constructor(
        message: string = "Nenhum resurso encontrado."
    ){
        super(409, message)
    }
}