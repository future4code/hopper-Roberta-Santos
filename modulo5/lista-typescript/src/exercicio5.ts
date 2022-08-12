// Considerando o array de usuários abaixo, crie uma função que receba este array
// como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.
const list : Array<usuarios> =  [
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},
    {name: "Adilson", email: "adilson@email.com", role: "user"},
    {name: "Carina", email: "carina@email.com", role: "admin"}
]
type usuarios = {
    name: string,
    email: string,
    role: string
}
const retornaUsuarios = (user: Array<usuarios>) : Array<usuarios> =>{
    return user.filter((index)=> (index.role === "admin") )
}
const retornoFilter = (user: Array<usuarios>) =>{
    return user.map((indice)=> indice.email)
}
// console.log(retornoFilter(list))
console.log(retornaUsuarios(list))