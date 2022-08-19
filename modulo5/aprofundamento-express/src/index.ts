import { afazeres } from './afazeres';
import * as express from 'express';
import * as cors from 'cors';
import  {Request, Response} from 'express';
import { AddressInfo } from "net";
import { type } from 'os';
import { request } from 'http';
import { idText } from 'typescript';

const app = express();

app.use(express.json());
app.use(cors());


app.get("/ping", (req: Request, res: Response) => {       
    console.log("request feito")   
    res.send("Pong! 🏓")
})

export type toDo = {
  
    "userId": number,
    "id": number,
    "title": string,
    "completed": false | true
  
}


app.get("/concluidos", (req: Request, res: Response)=>{

  const concluidos = afazeres.map((item)=>{
    if(item.completed === true){
      return item
    }
  })
  res.status(200).send(concluidos)
})




app.delete("/afazer",(request: Request, response: Response)=>{
  const concluidosDelete = request.query.id 

  if(!concluidosDelete){
    response.status(400).send("Id obrigatoria")
  }

  const lista = afazeres.map((item)=> item.id).flat(1)

  const filteredLista = lista.filter((lista)=>{
    if(lista.id !== concluidosDelete){
      return true
    }
  })
  response.send(filteredLista)
})


app.get("/afazeresId",(request: Request, response: Response)=>{
  const listaId = afazeres.map((item)=> item.id).flat(1)

  const filListaId = listaId.filter((lista)=>{
    if(lista ){
      return true
    }
  })
  response.send(filListaId)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;