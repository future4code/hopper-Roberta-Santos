
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { customer, users } from './accounts';
import { ManageDate } from './alterarDate';


const app: Express = express();

app.use(express.json());
app.use(cors());



app.post("/createAccount", (req:Request, res:Response)=>{
      let errorCode = 400
   try{
       const{name,CPF,birthDate} = req.body
       if(!name || !CPF || !birthDate){
           errorCode = 422
           throw new Error("Falta o parâmetro de busca!");            
       }
      const informedAge = new ManageDate().ageFromDateOfBirthday(birthDate)
            if(informedAge < 18) {
               errorCode = 406
             throw new Error("A idade minima deve ser 18 anos");
            
            }

       const newUser: customer = {
           id: Math.random(),
           name,
           CPF,
           birthDate,
           balance: 0.0,
       }
       users.push(newUser)

       res.status(200).send(newUser)

   }catch(error:any){
       res.status(errorCode).send(error.message)   
   }
})


app.get("/allUsers",(req:Request, res:Response)=>{
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




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});