import { BaseDatabase } from "./BaseDatabase";
import { User } from '../types/User';

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, duration_in_minutes, year_of_release }: any): Promise<void> {

    try {
      await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
      .into(MovieDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new Error("error.message");
      
      
    }
    
  }}