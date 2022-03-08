//Interpretação de código
/*1. está executando um laço de repetição com a condição de parada até 4 e somando o i na variavel valor em cada repetição
valor a ser exibido é 10
2.
a) Será impresso todos os numeros maiores que 18, ou seja, 19, 21, 23, 25, 27,30
b) o for... of não é suficiente ,pois ele exibe apenas o conteúdo do Array e não o indíce, para isso seria ideal utilizar o for.
3. Será impresso 4 linhas com os asteriscos correspondentes a cada linha, visto que 4 digitado pelo usuário é a condição de parada e a cada linha o for executa o incremento de asteriscos, então 1ª linha *, 2ª linha **, 3ª linha *** e 4ª linha ****. */

//Escrita de código

//1.
let qtdBichinhos = Number(prompt('Quantos bichinhos você tem?'))
let nomeBichinhos = []
let nomeInformado

if(qtdBichinhos == 0 ){
   console.log("Que pena! Você pode adotar um pet!")
} 

if(qtdBichinhos > 0){
    for(i=0; i < qtdBichinhos; i++) {
        nomeInformado = prompt("Digite o nome do seu bichinho")
        nomeBichinhos.push(nomeInformado)
    }
}

console.log(nomeBichinhos)
 //2.
//a)
 let arrayOriginal = [10,23,35,57,90]
 let novoArray1 = []
 let novoArray2 = [23,35,85,96]
 let valorMaximo = 0
 let valorMinimo = 11

 let imprimeValores = (Array) =>{
    for (let numero of Array){
         console.log(numero)
    }
 }

imprimeValores(arrayOriginal)
//b)
let divideValores = (Array) =>{

    for (let numero of Array){
        numero /= 10
        console.log(numero)
    }
}
divideValores(arrayOriginal)
//c)
let imprimePares = (Array) =>{

    for (let numero of Array){
        if (numero % 2 == 0){
        novoArray1.push(numero)}
        
    }
    console.log(novoArray1)
}
imprimePares(arrayOriginal)
//d)
let imprimeString = (Array) =>{
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];
        console.log(`O elemento do index ${i} é ${element}`)
    }
    
}
imprimeString(novoArray2)
//e)
let verificaMaiorEMenor = (Array) =>{
    for (let i = 0; i < Array.length; i++) {
        if( Array[i] > valorMaximo){
            valorMaximo = Array[i]
        }
        if( Array[i] < valorMinimo){
            valorMinimo = Array[i]
        
         }
    }
   console.log(`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}`)
}
verificaMaiorEMenor(arrayOriginal)