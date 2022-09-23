import { connection } from '../index';
import { Request, Response } from "express"


export default async function createUsers(
    req: Request,
    res: Response
):Promise<void>{
    try {
        const {name, price, image_url} = req.body

        await connection("labecommerce_products")
        .insert({name, price, image_url})
    
    res.status(201).end()

    } catch (error) {
        
        res.status(500).end()
    }


}