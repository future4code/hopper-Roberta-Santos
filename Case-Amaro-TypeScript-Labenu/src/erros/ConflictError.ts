import { BaseErro } from "./BaseErros";


export class ConflictError extends BaseErro {
    constructor(
        message: string = "Este recurso já existe."
    ){
        super(409, message)
    }
}
