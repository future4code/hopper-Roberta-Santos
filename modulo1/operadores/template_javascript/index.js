/*
1-

a. false
b. false
c. true
d. boolean

2-
não é apropriado declarar a variável de uma operação como const, pois o valor não permanecerá constante quando realizar a próxima operação e é necessário a conversão do formato da resposta de string para números

3- 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

primeiroNumero = Number(primeiroNumero)
segundoNumero - Number(segundoNumero)

let soma = primeiroNumero + segundoNumero

console.log(soma)

*/
// exercicio de escrita de código
//1
let idade = prompt('Qual é sua idade?')
let idadeAmigo = prompt ('Qual é a idade do seu melhor amigo?')

idade = Number(idade)
idadeAmigo = Number(idadeAmigo)

console.log('Sua idade é maior que a do seu amigo?', idade > idadeAmigo)
console.log(idade - idadeAmigo)

//2

let numeroPar = prompt('Insira um número par')
numeroPar = Number(numeroPar)
console.log(numeroPar % 2)
// o resto de numeros pares será sempre 0 e de números impares 1 quando dividido por dois

//3
let idadeAnos = prompt ('Quantos anos você tem?')
idadeAnos = Number(idadeAnos)
console.log('A idade em meses é ', idadeAnos * 12)
console.log('A idade em dias é ', idadeAnos * 365)
console.log('A idade em horas é ', idadeAnos * (365*24))

//4

let numero1 = prompt('Insira um número')
let numero2 = prompt('Insira outro número')
numero1 = Number(numero1)
numero2 = Number(numero2)

console.log('O primeiro numero é maior que segundo?',numero1>numero2)
console.log('O primeiro numero é igual ao segundo? ',numero1===numero2)
console.log('O primeiro numero é divisível pelo segundo? ',(numero1%numero2)===0)
console.log('O segundo numero é divisível pelo primeiro? ',(numero2%numero1)===0)

//Desafio

//1a.

let f = 77
let k = (f - 32)*(5/9) + 273.15
console.log(k,'K')

//b.
let c = 80
f = (c)*(9/5) + 32
console.log(f,'C')

//c.
c= 30
f = (c)*(9/5) + 32
k = (f - 32)*(5/9) + 273.15
console.log(f,"F e",k,"K")
//d.
c= prompt('Insira o valor em celsius que deseja converter')
c=Number(c)
f = (c)*(9/5) + 32
k = (f - 32)*(5/9) + 273.15
console.log(f,"F e",k,"K")