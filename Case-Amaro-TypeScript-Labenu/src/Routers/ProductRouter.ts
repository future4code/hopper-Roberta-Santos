import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductControler } from '../controller/ProductController';
import { ProductDataBase } from "../dataBase/migrations/ProductDataBase";
import { Authenticator } from "../Services/Authenticator";




export const ProductRouter = Router()

const productControler = new ProductControler(
    new ProductBusiness(
        new ProductDataBase(),
        new Authenticator()
    )
)

ProductRouter.post("/add", productControler.addProduct)
ProductRouter.get("/", productControler.getProducts)
ProductRouter.get("/searchId/:product_id", productControler.getProductSearchById)
ProductRouter.get("/searchName", productControler.getProductSearchByName)
ProductRouter.get("/byTag", productControler.getProductSearchByTag)
