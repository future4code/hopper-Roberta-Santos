import express, {Express} from "express";
import cors from "cors";
import * as dotenv from 'dotenv';

const app: Express = express()

dotenv.config()

app.use(express.json())
app.use(cors())



app.listen(3003, ()=>{
    console.log ("Server ready!")
})

export default app;