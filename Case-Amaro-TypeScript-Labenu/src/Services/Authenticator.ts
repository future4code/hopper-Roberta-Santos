import { AuthenticationData } from "../Model/user"
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()



export class Authenticator {

    generateToken = (payload: AuthenticationData) : string =>{
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

    getTokenPayload = (token: string) : AuthenticationData | null =>{

        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as AuthenticationData

        } catch (error) {
            return null

        }
    }
}
