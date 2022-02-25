/* Interpretação de código

1.
a) solicita um número para usuário e realiza a operação módulo e compara o resultado se é par 
b) números pares
c) Números impares

2.a) para informar o preço da fruta em comparação com o que o usuário indica.
b)2.25
c) é informado o preço incorreto, pois o sistema procura o próximo break e com isso começa a substituir o valor pelos próximos informados

3 a) Solicita um número para usuário, converte a String para number e armazena na variável numero
b) Se digitou 10 será exibido "Esse número passou no teste " Se for -10 será exibido erro mensagem is not defined
c) Sim. Pois a variavel foi definida dentro do bloco de ação da condição ,ou seja, escopo local e o console está chamando a variavel no escopo global
*/

//Exercicio de código 
//1.

const idade = Number(prompt('Qual sua idade?'))

const podeDirigir = (consulta) =>{
    if (consulta>=18){
        console.log('Você pode dirigir')
    } else {
        console.log('Você não pode dirigir')
    }
}
podeDirigir(idade)

//2.

const respostaTurno = prompt('Informe seu turno M para Matutino, V para Vespestino, N para Noturno').toUpperCase()

const verificaTurno = (turno) =>{
    if (turno == 'M'){
        console.log('Bom dia!')
    }else if (turno == 'V'){
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }
}
verificaTurno(respostaTurno)
//3.
const respostaTurno = prompt('Informe seu turno M para Matutino, V para Vespestino, N para Noturno').toUpperCase()
switch(respostaTurno){
    case ('M'):
        console.log('Bom dia!')
        break
    case ('V'):
        console.log('Boa tarde!')
        break
    default:
        console.log('Boa noite!')
        break
}

//4.

const generoFilme = prompt('Qual tipo de filme deseja assistir?')
const precoIngresso = Number(prompt('Qual o valor do ingresso?'))

const verificaFilme = (filme, preço) =>{
    if (filme == "Fantasia" && preço < 15.00){
        console.log('Bom filme!')
    }else {
        console.log('Escolha outro filme :(')
    }
}
verificaFilme(generoFilme, precoIngresso)