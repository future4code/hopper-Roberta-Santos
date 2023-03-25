import { IUserDB, User } from "../Model/user";
import { BaseDatabase } from "./migrations/BaseDataBase";


export class UserDataBase extends BaseDatabase{

    public static TABLE_USERS = "Amaro_Users"

    public createUser = async (user:User) => {
        const userDB: IUserDB = {
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role:user.getRole()
        }

        await BaseDatabase
        .connection(UserDataBase.TABLE_USERS)
        .insert(userDB)

    }

    public checkEmailExixtente = async (email: string): Promise <IUserDB | undefined> =>{

        const result: IUserDB[] = await BaseDatabase
        .connection(UserDataBase.TABLE_USERS)
        .select()
        .where({email})

        return result[0]
    }

}
