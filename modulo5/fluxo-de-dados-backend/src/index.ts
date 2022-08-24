import express, {Request, Response} from "express";
import cors from "cors";
import { product } from "./data";
import { AddressInfo } from "net";
import {v4 as generateId} from "uuid"

const app = express();

app.use(express.json());
app.use(cors());


app.get("/teste", (req:Request, resp:Response )=>{
    resp.send("mensagem generica") 
})
,app.post("/newproduct/create", (req: Request, res: Response)=>{
    let statusCode = 500
    const userName = req.headers.authorization
    const productList = req.body.name
    const pricePrice = req.body.price
    try {
        if (!userName) {
        statusCode = 4001
        throw new Error ("Authorization not found.")
        }
        const produtoName = product.find((user)=>user.id === userName)
        if (!produtoName){
        statusCode = 4004
         throw new Error("Produto não encontrado")
        }
        const produtoPro = product.find((index)=>index.name.toLowerCase() === (productList as string).toLowerCase())
        if(produtoPro) {
            statusCode = 409
            throw new Error("Produto já existe.")
        }
        const newProduct = {
            id: generateId(),
            name : productList,
            price : pricePrice
        }
        product.push(newProduct)
        res.status(201).send("Produto criado com sucesso.")
    } catch (error) {
        res.status(statusCode).send(error.message)
    }
})
app.get("/todosProdutos", (req: Request, res: Response)=>{
    const todosProdutos = product.map((item)=>{
       return item
    })
    res.status(200).send(todosProdutos)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;