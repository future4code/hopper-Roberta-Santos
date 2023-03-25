import { BaseErro } from "./BaseErros";


export class UnauthorizedError extends BaseErro {
    constructor(
        message: string = "Credencial invalida."
    ){
        super(401, message)
    }
}