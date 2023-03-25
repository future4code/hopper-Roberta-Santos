import { ProductDataBase } from "../dataBase/migrations/ProductDataBase";
import { NotFoundErros } from "../erros/NotFoundErros";
import { RequesteErros } from "../erros/RequesteError";
import { UnauthorizedError } from "../erros/UnauthorizedError";
import { IddProductInputDTO, IGetProductBynameInputDTO, IgetProductByTagInputDTO, IGetProductsOutputDTO, Product } from "../Model/Product";
import { USER_ROLES } from "../Model/user";
import { Authenticator } from "../Services/Authenticator";





export class ProductBusiness {
    constructor(
        private productDataBase: ProductDataBase,
        private authenticator: Authenticator
    ){}

    public addProduct =async (input:IddProductInputDTO) => {
        const {token, id, name} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Erro: Usuário não autenticado.")
        }

        if(payload.role === USER_ROLES.NORMAL){
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem adicionar produtos.");
        }

        if (!name) {
            throw new RequesteErros("Erro: Preencha o nome do produto.")
        }

        if (!id) {
            throw new RequesteErros("Erro: Preencha id do produto.")
        }

        if (typeof id !== "number") {
            throw new RequesteErros("Erro: Id deve ser do tipo 'number'.")
        }

        const productExists = await this.productDataBase.getProductById(id)

        if(productExists){
            throw new RequesteErros("Erro: Id já cadastrada!")
        }

       const newProduct = new Product(
           id,
           name
       )
await this.productDataBase.addProduct(newProduct)

       const response = {
           message:"Produto adicionado com sucesso!",
           newProduct
       }

       return response
    }

    public getProducts = async () => {
        const productsDB = await this.productDataBase.getProducts()

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products){

            const tagsDB:any = await this.productDataBase?.getTags(product.getId())
            const tags = tagsDB?.map((tag:any) => tag.name )

            product.setTags(tags)
        }

        return products
    }
public getProductSearchById = async (input:IGetProductBynameInputDTO) => {
    const  search  = Number(input.search) 
 
    if(!search){
        throw new RequesteErros("Erro: insira id do produto para busca!");

    }

    if(typeof search !== "number"){
        throw new RequesteErros("Erro: id para busca deve ser um 'number'!")
    }

    const productExists = await this.productDataBase.getProductById(search)

    if(!productExists){
        throw new NotFoundErros("Erro: Id não encontrada!")
    }

    const productsDB = await this.productDataBase?.getProductSearchById(search)

    const products = productsDB.map(productDB => {
        return new Product(
            productDB.id,
            productDB.name
        )
    })

    for (let product of products){

        const tagsDB:any = await this.productDataBase?.getTags(product.getId())
        const tags = tagsDB?.map((tag:any) => tag.name )

        product.setTags(tags)
    }

    const response:IGetProductsOutputDTO = {
        products
    }

    return response

}
public getProductSearchByName =async (input:IGetProductBynameInputDTO) => {
    const  search  = input.search

    if(!search){
        throw new RequesteErros("Erro: insira nome do produto para busca!");

    }

    if(typeof search !== "string"){
        throw new RequesteErros("Erro: id para busca deve ser uma 'string'!")
    }


    const productsDB = await this.productDataBase?.getProductSearchByName(search)

    const products = productsDB.map(productDB => {
        return new Product(
            productDB.id,
            productDB.name
        )
    })

    for (let product of products){

        const tagsDB:any = await this.productDataBase.getTags(product.getId())
        const tags = tagsDB?.map((tag:any) => tag.name )

        product.setTags(tags)
    }

    const response:IGetProductsOutputDTO = {
        products
    }

    return response

}
public getProductSearchByTag =async (input:IgetProductByTagInputDTO) => {
    const  search  = input.search 

    if(!search){
        throw new RequesteErros("Erro: insira tag do produto para busca!");

    }

    const tag = await this.productDataBase.getTagById(search)
    const tag_id = tag?.map(item => item.id)

    const products = await this.productDataBase.getProductSearchByTag(tag_id[0])

    if(tag_id.length === 0){
        throw new NotFoundErros("Erro: tag não encontrada!")
    }

    const response: IGetProductsOutputDTO = {
        products: products
    }

    return response
}
}
