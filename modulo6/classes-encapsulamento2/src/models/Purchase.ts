// type para tipar no typescript com camelCase
export class Purchase {
    constructor(
        protected id: string,
        protected userId: string,
        protected productId: string,
        protected quantity: number,
        protected totalPrice: number) {
            this.id= id,
            this.userId = userId,
            this.productId = productId,
            this.quantity = quantity,
            this.totalPrice = totalPrice
        
    }
    
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}