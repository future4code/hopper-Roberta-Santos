/*
Resposta exercício de interpretação 
1 - 10 5 
2 - Erro pois a variável c não foi declarada
3 - São exibidas dois popups para o usuário responder as perguntas e outro popup para exibir as respostas do usuário dentro do texto definido.
Sugestao de variaveis horasTrabalhadasDia e valorPagoDia

*/

let nome
let idade
console.log(typeof nome, idade) 
// foi exibido undefined pois a variável ainda não recebeu nenhum valor 

nome = prompt('Qual seu nome?')
idade = prompt ('Informe sua idade')
console.log(typeof nome, idade) 
// Que independente do tipo da resposta da variável o prompt coloca como string
console.log ('Olá', nome, 'você tem', idade, 'anos')

let roupa = prompt ('Você está usando roupa preta? Responda Sim ou Não')
let trabalho = prompt ('Você trabalhou hoje? Responda Sim ou Não')
let feijoada = prompt ('Você gosta de feijoada? Responda Sim ou Não')

console.log( 'Você está usando roupa preta? -' ,roupa, 'Você trabalhou hoje? -' ,trabalho, 'Você gosta de feijoada? -' ,feijoada)

let a = 10
let b = 25
let c 
c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//desafio

let n1 = prompt('Informe um número')
let n2 = prompt('Informe outro número')
let x
let y

n1 = Number(n1)
n2 = Number(n2)

x = n1 + n2
y = n1 * n2

console.log('O primeiro número somado ao segundo número resulta em:' ,x)
console.log('O primeiro número somado ao segundo número resulta em:' ,y)