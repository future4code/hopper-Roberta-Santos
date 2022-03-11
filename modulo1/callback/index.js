/*Interpretação de código

1
a) exibe referente ao parametro solicita, sendo que a primeira linha exibe o item 0, depois item 1 e depois item 2 do objeto do array, depois mostra o index desse item e por ultimo o array com todos objetos. 
2.a) nesse caso ele vai exibir apenas o nome do objeto e não vai mostrar o apelido
3.a) vai exibir apenas o item do objetos no qual não tiver apelido Chijo*/
//1a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item,index,array) => {
     return item.nome
 })
 console.log(nomePets)
 //b)

 const salsicha = pets.filter((item,index,array) => {
    return item.raca == "Salsicha"
})
console.log(salsicha)
//c)


const poodle2 = pets.filter((item) =>{
    return item.raca == "Poodle"})
 
const mensagemPoodle = poodle2.map((poodle2)=> {
    return `Você ganhou 10% dedesconto para tosar o/a ${poodle2.nome}`})

    console.log(mensagemPoodle)

   
//2.a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((item,index,array)=>{
     return item.nome
 })
 console.log(nomeProdutos)

 //b) 
 const promocao = produtos.map((produto)=>{
     const objeto = {
         nome: produto.nome,
         preco: (produto.preco *0.95).toFixed(2)
     }
     return objeto
 })
 console.log(promocao)

 //c)
 const bebidas = produtos.filter((item,index,array)=>{
    return item.categoria == 'Bebidas'
 })
 console.log(bebidas)


//d) 
const ype = produtos.filter((produto)=> produto.nome.includes("Ypê"))
console.log(ype)

//e)
const produtosYpe = ype.map((ype)=> {
    return `Compre ${ype.nome} e ${ype.preco}`
})
console.log(produtosYpe)