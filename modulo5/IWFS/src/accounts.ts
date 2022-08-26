export type customer = {
    id: number
    name: string,
    CPF: number,
    birthDate: string,
    balance: number,
    transaction?: []
    

}
export type statement = {
    value: number,
    date: Date,
    description: string
}
export let users: customer[] = [
    {
        id: 1,
        name: "Maria Silva",
        CPF: 112359624788,
        birthDate: "12/03/1960",
        balance: 0.00
    },
    {
        id: 2,
        name: "José da Silva",
        CPF: 33344466678,
        birthDate: "14/08/1953",
        balance: 0.0  
    },
    {
        id: 3,
        name: "Helena da Silva",
        CPF: 10359876133,
        birthDate: "12/02/1980",
        balance: 0.0
    }
]
