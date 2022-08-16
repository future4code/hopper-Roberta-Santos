import { postList } from './posts';
import express, {Request, Response}  from "express";
import cors from "cors";
import { userList } from "./users"

import { AddressInfo } from "net";

const app = express();


app.use(express.json());
app.use(cors());


app.get('/teste', (req:Request, res:Response)=>{
    res.send("Hello from Express")
});

app.get('/users', (req:Request, res:Response)=>{
    const usuarios = userList.map((user)=>{
        return user
    })


    res.status(200).send(usuarios)
});
app.get('/posts', (req:Request, res:Response)=>{
    const publicacao = postList.map((post)=>{
        return post
    })


    res.status(200).send(publicacao)
});

app.get('/mypost', (req:Request, res: Response)=>{
    const meuPostID = Number(req.query.id)

    if(!meuPostID){
        res.status(400).send("Id não informado")
    }

    const allPosts = postList.map((post)=>{
        return post
    })
    let meusPosts
    allPosts.forEach(post=>{
        if(post.userId === meuPostID){
            meusPosts = post
        }
    })

    res.send(meusPosts)
})
export type posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type users = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;