/* Interpretação de código

1. a) 10
      50

    b) executaria a função mas não exibiria no console

2. a) o código recebe um texto do usuário e a função retorna true se tiver a palavra cenoura ou false caso não encontrar.
    b) i. true
    ii. true
    iii. false

*/
//1.
/*
let nome = "Roberta"  
let idade = 31
let cidade = "Betim"
let estudante = "sou estudante"


let mostraResposta = () => {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}`)
}

mostraResposta()

let mostraResposta2 = (nome, idade, cidade, profissao) => {
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
mostraResposta2('Fulano', 45, 'Belo Horizonte', 'Customer Success Manager')
*/ /*
//2
//a)
let soma = (n1,n2) =>{
    return n1 + n2
}

console.log(soma(5,3))

//b)
let compararNumeros = (n1,n2) =>{
    return n1 >= n2
}
console.log(compararNumeros(5,3))

//c)

let validaPar = (numero) =>{
   return numero % 2 == 0
}
console.log (validaPar(13))

//d) 
let validaFrase = (texto) => {

     console.log(texto.length,  texto.toUpperCase())
        
}

validaFrase('Mensagem')
*/
//3.

let somar = (n1 , n2) =>{
    return n1 + n2
}

let subtrair = (n1 , n2) =>{
    return n1 - n2
}

let multiplicar = (n1 , n2) =>{
    return n1 * n2
}

let dividir = (n1 , n2) =>{
    return n1 / n2
}

let numero1 = Number(prompt('Informe um número'))
let numero2 = Number(prompt('Informe outro número'))

console.log(`Números inseridos : ${numero1} e ${numero2}`)
console.log("Soma:", somar(numero1,numero2))
console.log("Diferença:", subtrair(numero1,numero2))
console.log("Multiplicação:", multiplicar(numero1,numero2))
console.log("Divisão:", dividir(numero1,numero2))
