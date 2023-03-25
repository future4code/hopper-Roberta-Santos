import { UserDataBase } from '../dataBase/UserDataBase';
import { AuthenticationData, ILoginInputDTO, ISignupOutputDTO, User, UserSignInputDTO, USER_ROLES } from '../Model/user';
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGeneration } from "../Services/IdGeneration";
import { RequesteErros } from '../erros/RequesteError';
import { NotFoundErros } from '../erros/NotFoundErros';
import { UnauthorizedError } from '../erros/UnauthorizedError';
import { ConflictError } from '../erros/ConflictError';



export class UserBusiness {
    UserDataBase: any;
    constructor(
        private userDatabase: UserDataBase,
        private idGeneration: IdGeneration,
        private hashManager: HashManager,
        private authenticator: Authenticator

    ){}

    public signup = async (input:UserSignInputDTO) => {
        const {name, email, password} = input

        if (typeof name !== "string" || name.length < 3) {
            throw new RequesteErros("Erro: Parâmetro 'name' deve ser 'string' e ter ao menos 3 caracteres.")
        }


        if (typeof password !== "string" || password.length < 6) {
            throw new RequesteErros("Erro: Parâmetro 'password' deve ser 'string' e ter ao menos 6 caracteres.")
        }

        if (typeof email !== "string") {
            throw new RequesteErros("Erro: Parâmetro 'email' deve ter do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new RequesteErros("Erro: Parâmetro 'email' inválido.")
        }

        const ifEmailExists = await this.userDatabase.checkEmailExixtente(email)
        if (ifEmailExists) {
            throw new ConflictError("Erro: E-mail já cadastrado!");
        }
const id = this.idGeneration.generation()
    const hasPassword = await this.hashManager.hash(password)

    const user = new User(
        id,
        name,
        email,
        hasPassword,
        USER_ROLES.NORMAL
    )

    await this.UserDataBase.createUser(user)

    const payload: AuthenticationData ={
        id: user.getId(),
        role:user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response: ISignupOutputDTO={
        message:"Cadastro realizado.",
        token
    }
    return response
    }
public login = async(input:ILoginInputDTO) => {
        const {email, password} = input

        if (typeof email !== "string") {
            throw new RequesteErros("Erro: Parâmetro 'email' deve ser do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new RequesteErros("Erro: Parâmetro 'email' inválido.")
        }

        if (typeof password !== "string") {
            throw new RequesteErros("Erro: Parâmetro 'password' deve ser do tipo 'string.'")
        }

        if(password.length < 6){
            throw new RequesteErros("Erro: Parâmetro 'password' deve ter ao menos 6 caracteres.")
        }

        const userDB = await this.userDatabase.checkEmailExixtente(email)
        if (!userDB) {
            throw new NotFoundErros("Erro: E-mail não cadastrado no sistema!");
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )
const ifPasswordIsCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!ifPasswordIsCorrect){
            throw new UnauthorizedError("Erro: password incorreta!");
        }

        const payload:AuthenticationData = {
            id:user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message:"Login realizado com sucesso!",
            token
        }

        return response

    }

}
