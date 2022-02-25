/*Interpretação de código
1.
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2.  a)
	nome: "Juca", 	idade: 3, 	raca: "SRD"
    nome: "Juba", 	idade: 3, 	raca: "SRD"
    nome: "Jubo", 	idade: 3, 	raca: "SRD"
    b) realiza um espelhamento do objeto citado

3.


a)  false,
    undefined

b) o primeiro item retorna o conteúdo da propriedade backender que é false, porém o segundo item não foi localizado dentro do objeto por isso retorna undefined


Escrita de código */

//1.

//a)
const pessoa = {
    nome: "Roberta",
    apelidos: ["Ro", "beta", "betinha"] 
}

const mostraApelido = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de : ${objeto.apelidos}`)
}
mostraApelido(pessoa)

//b)

const animal = {...pessoa, apelidos: ["toto", "lala", "miau"]}

mostraApelido(animal)


//2.
const funcionarios = {
    nome: "Fulano",
    idade: 23,
    profissao: "Encanador"
 }
 const exfuncionarios = {
    nome: "Silva",
    idade: 50,
    profissao: "Porteiro"
 }

 const mostraDados = (objeto1, objeto2) => {

     const arquivoAtual = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao,objeto1.profissao.length ]

     const arquivoAntigo = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao,objeto2.profissao.length ]

     console.log(arquivoAtual, arquivoAntigo) 
 }

 mostraDados(funcionarios, exfuncionarios)
 

 //3.

 let carrinho = []

 let fruta1 = {
     nome: "banana",
     disponibilidade: true
 }
 let fruta2 = {
    nome: "melao",
    disponibilidade: true
}
let fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}

let colocaNoCarrinho = (fruta) => {
    carrinho.push(fruta)
}
colocaNoCarrinho(fruta1)
colocaNoCarrinho(fruta2)
colocaNoCarrinho(fruta3)

console.log(carrinho)