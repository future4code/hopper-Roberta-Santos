import express, {Express, Response, Request} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex from "knex";



const app: Express = express();

app.use(express.json());
app.use(cors());
dotenv.config();
export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

app.get("/getAllUsers", async(req: Request, res: Response): Promise<void> =>{
    try {
       const users = req.params.user

       if(users){
        const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name LIKE "%${users}%";
    `)
        res.status(200).send(result[0])
       }
 
       if(!users.length){
         res.statusCode = 404
          throw new Error("No recipes found")
       } 
 
      
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })


 export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});