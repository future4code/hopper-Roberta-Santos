import { BaseDatabase } from "./BaseDatabase";
import { User } from '../types/User';

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {

    try {
      await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new Error("error.message");
      
      
    }
    
  }


   public getAllUsers = async (user:User) => {
    
   
    try {
       await UserDatabase.connection(UserDatabase.TABLE_NAME)     

    } catch (error:any) {
      throw new Error("error.message");
    }
  }
}
