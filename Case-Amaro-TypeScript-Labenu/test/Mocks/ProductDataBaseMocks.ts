import { IProductDB, ITagsDB, Product } from "../../src/Model/Product"



export class ProductDataBaseMocks {
    public static TABLE_PRODUCTS = "Products_Amaro"
    public static TABLE_TAGS = "Tags_Amaro"
    public static TABLE_TAGS_PRODUCTS = "Tags_Products_Amaro"

    public adProduct = async (input: Product) =>{

    }

    public getProduct = async()=>{
        const prod: IProductDB[]=[
            {
                id: 8371,
                name: "VESTIDO CHEVRON"
              },
              {
                id: 8367,
                name: "VESTIDO MOLETOM"
              },
              {
                id: 8363,
                name: "VESTIDO CURTO"
              },
              {
                id: 8360,
                name: "VESTIDO CANELADO"
              },
              {
                id:8314,
                name:"VESTIDO ACINTURADO"
              }
        ]
        return prod
    }

    public getProdByID = async (id:number)=>{
        const prod: IProductDB[]=[
            {
                id: 8371,
                name: "VESTIDO TRICOT CHEVRON"
              }
        ]
        switch (id) {
            case 8371:
                return prod

            default:

                return undefined;
        }
    }
public getProdSearchByID = async (search:number)=>{
        const prod: IProductDB[]=[
            {
                id: 8371,
                name: "VESTIDO CHEVRON"
              },
              {
                id: 8367,
                name: "VESTIDO MOLETOM"
              }
        ]
        switch (search) {
            case 8371:
                return prod

            default:
                undefined
        }
    }

    public getProdtSearchByName = async (search: string) => {
        const prod:IProductDB[] = [
            {
              id: 8371,
              name: "VESTIDO CHEVRON"
            },
            {
              id: 8367,
              name: "VESTIDO MOLETOM"
            }
        ]

        switch(search){
            case "tricot":
                return prod
            default: 
                undefined
        }
    }

    public getProdtSearchByTag = async (search: number) => {
        const prod:IProductDB[] = [
            {
              id: 8371,
              name: "VESTIDO CHEVRON"
            },
            {
                id: 8363,
                name: "VESTIDO CURTO"
            }
        ]

        switch(search){
            case 103 :
                return prod
            default:
                undefined
        }
    }
public getTagById =async (search:string) => {
        const tag_test: ITagsDB[] = [
            {
                id: 103,
                name: "delicado"
            }
        ]

        const tag_test2: ITagsDB[] = [
            {
                id: 105,
                name: "casual"
            }
        ]

        switch(search){
            case "delicado":
                return tag_test
            case"casual":
                return tag_test2
        }
    }

    public getTags =async (id:number) => {
        const tags:ITagsDB[] = [
            {
                id: 101,
                name: "balada"
            },
            {
                id: 102,
                name: "neutro"
            },
            {
                id: 103,
                name: "delicado"
            }
        ]

        switch(id){
            case 8371:
                return tags

            default: 
                undefined
        }


    }
}