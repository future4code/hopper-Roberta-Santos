import { AddressInfo } from "net";
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { User, users, USER_ROLE } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());


//A) METODO GET B) o array users está sendo manipulado
app.get("/users", (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const usuarios = users.map((user)=>{
                return user
              })
              res.status(200).send(usuarios)
        
    } catch (error:any) {

        res.status(errorCode).send(error.message)
        
    }
})
//A E B) PASSANDO O USER_ROLE COMO PARAMETRO PARA GARANTIR QUE O VALOR DIGITADO, SEJA OS TIPOS DISPONIVEIS
app.get("/users/type", (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const type = req.query.USER_ROLE as string
        if(!type){
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");            
        }

        const user = users.filter((u)=>{
            return u.type.toUpperCase() === type.toUpperCase()
        })

        if(!user){
            errorCode = 404
            throw new Error("Tipo não encontrado!");            
        }

        res.status(200).send(user)
             
    } catch (error:any) {

        res.status(errorCode).send(error.message)
        
    }
})

//A) QUERY.NAME

app.get("/users/name", (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const name = req.query.name as string
        if(!name){
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");            
        }

        const user = users.find((u)=>{
            return u.name.toUpperCase() === name.toUpperCase()
        })

        if(!user){
            errorCode = 404
            throw new Error("Tipo não encontrado!");           
        }

        res.status(200).send(user)
             
    } catch (error:any) {

        res.status(errorCode).send(error.message)
        
    }
})


app.post("/users", (req:Request, res:Response)=>{
    let errorCode = 400
    try{
        const{name,email,type,age} = req.body
        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");            
        }

        if(type.toUpperCase() !== USER_ROLE.ADMIN && type.toUpperCase() !== USER_ROLE.NORMAL){
            errorCode = 422
            throw new Error("Inserir um tipo de usuário válido");            
        }

        const newUser: User = {
            id: Math.random(),
            name,
            email,
            type,
            age,
        }
        users.push(newUser)

        res.status(200).send(users)

    }catch(error:any){
        res.status(errorCode).send(error.message)   
    }
    
})

app.put("/users", (req:Request, res:Response)=>{
    let errorCode = 400
    try{
        const{name,email,type,age} = req.body
        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");            
        }

        if(type.toUpperCase() !== USER_ROLE.ADMIN && type.toUpperCase() !== USER_ROLE.NORMAL){
            errorCode = 422
            throw new Error("Inserir um tipo de usuário válido");            
        }

        const newUser: User = {
            id: Math.random(),
            name,
            email,
            type,
            age,
        }
        users.push(newUser)

        res.status(200).send(users)

    }catch(error:any){
        res.status(errorCode).send(error.message)   
    }
    
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});