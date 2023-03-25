import { UserDataBase } from "../UserDataBase"
import { BaseDatabase } from "./BaseDataBase"
import { products, tags, tagsProduct, users } from "./data"
import { ProductDataBase } from "./ProductDataBase"




class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error:any) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }
createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDataBase.TABLE_TAGS_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDataBase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDataBase.TABLE_TAGS};
        DROP TABLE IF EXISTS ${UserDataBase.TABLE_USERS};

        CREATE TABLE IF NOT EXISTS ${UserDataBase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductDataBase.TABLE_PRODUCTS}(
            id  INT(4) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductDataBase.TABLE_TAGS}(
            id INT(4) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductDataBase.TABLE_TAGS_PRODUCTS}(
            id INT(4) PRIMARY KEY,
            product_id INT(4) NOT NULL,
            tag_id INT (4) NOT NULL,
            FOREIGN KEY (tag_id) REFERENCES ${ProductDataBase.TABLE_TAGS}(id),
            FOREIGN KEY (product_id) REFERENCES ${ProductDataBase.TABLE_PRODUCTS}(id)
            
        )
        `)
    }
insertData = async () => {
        await BaseDatabase
        .connection(UserDataBase.TABLE_USERS)
        .insert(users)

        await BaseDatabase
        .connection(ProductDataBase.TABLE_PRODUCTS)
        .insert(products)

        await BaseDatabase
        .connection(ProductDataBase.TABLE_TAGS)
        .insert(tags)

        await BaseDatabase
        .connection(ProductDataBase.TABLE_TAGS_PRODUCTS)
        .insert(tagsProduct)
    }

}

const migrations = new Migrations()
migrations.execute()
