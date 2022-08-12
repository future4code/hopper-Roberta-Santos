// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const nome: string = "José"
const data: string = "25/01/1966"

let dados = data.split('/', 3)

console.log(`Olá me chamo ${nome}, nasci no dia ${dados[0]} do mês de ${dados[1]} do ano de ${dados[2]}` )
