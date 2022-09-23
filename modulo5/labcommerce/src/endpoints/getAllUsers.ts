import { Request, Response } from "express";
import { user } from "../types";
import { connection } from "..";

export default async function getAllUsers(
    req: Request,
    res: Response
):Promise<void>{

    try {

        const users:user[]= await connection("labecommerce_users")
        res.send(users)
    } catch (error) {
    
            res.status(500).send("Unexpected server error")
    }
    

}