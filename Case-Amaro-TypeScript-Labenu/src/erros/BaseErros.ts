export class BaseErro extends Error {
    constructor(
        public statusCode: number = 400,
        message: string = ""
    ){
        super(message)
    }
}