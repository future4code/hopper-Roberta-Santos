import { connection } from '../index';
import { Request, Response } from "express"


export default async function createUsers(
    req: Request,
    res: Response
):Promise<void>{
    try {
        const {name, email, password} = req.body

        await connection("labecommerce_users")
        .insert({name, email, password})
    
    res.status(201).end()

    } catch (error) {
        
        res.status(500).end()
    }


}