import { BaseDatabase } from './baseDataBase';
import { TABLE_NAME } from './tableNames';


export class userDatabase extends BaseDatabase{

    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string
      ): Promise<void> {
        try {
          await userDatabase.connection.insert({
              id,
              email,
              name,
              password
            })
            .into(TABLE_NAME);
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
  
}