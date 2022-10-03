import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});
// Endpoint de criar usuário
app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      throw new Error("Informe o nome, nickname e email do usuário")
    }

    const novoUser = {
      id: Number(Date.now()),
      name,
      nickname,
      email
    }

    await connection.raw(`
      INSERT INTO TodoListUser (id, name, nickname, email)
      VALUES(${novoUser.id}, "${novoUser.name}", "${novoUser.nickname}", "${novoUser.email}");
    `)

    res.status(200).send("Usuário Cadastrado")
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
});

// Pegar usuário pelo ID

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const user = req.params.id

    if (!user) {
      throw new Error("Informe o id do usuário")
    } else {
      const resultado = await connection.raw(`
      SELECT * FROM TodoListUser
      WHERE id = "${user}";
    `)

    res.status(200).send(resultado[0])
  }
    }catch (error:any) {
    res.status(errorCode).send(error.message)
  }
});


//Pegar todos os usuários

app.get("/user/all", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    
      const resultado = await connection.raw(`
      SELECT * FROM TodoListUser;
    `)

    res.status(200).send(resultado[0])
  }catch (error:any) {
    res.status(errorCode).send(error.message)
  }
});


// Editar Usuários

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const name = req.body.name
    const nickname = req.body.nickname
    
    const user = await connection.raw(`
      SELECT * FROM TodoListUser
      WHERE id = ${id};
    `)

    if (user[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }
    if(!id){
      throw new Error("Informe o ID do usuário que será alterado!");
      
    }

    if (!name || !nickname) {
      throw new Error("É necessário informar a nova alteração")
    }
    if(name){
      await connection.raw(`
      UPDATE TodoListUser
      SET name = "${name}"
      WHERE id = ${id};
    `)
    
    }
    if(nickname){
      await connection.raw(`
      UPDATE TodoListUser
      SET nickname = "${nickname}"
      WHERE id = ${id};
    `)
    
    }
   

    res.status(200).send("Usuário alterado")
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