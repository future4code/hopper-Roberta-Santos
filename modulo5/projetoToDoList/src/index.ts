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
      VALUES(${novoUser.id}, "${novoUser.name}", "${novoUser.nickname}", "${novoUser.email}")
    `)

    res.status(200).send("Usuário Cadastrado")
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