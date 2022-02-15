/*Interpretação de código
1.
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2.
SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

let nomeDoUsuario = prompt("Informe seu nome")
let emailDoUsuario = prompt("informe seu email")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

let comidasFavoritas = ["Hamburguer", "Sorvete", "Churrasco", "Pizza", "Brigadeiro"]
console.log(comidasFavoritas)
console.log('Essas são minhas comidas preferidas:')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
let comidaUsuario = prompt('Informe sua comida favorita')
comidasFavoritas [1] = comidaUsuario
console.log(comidasFavoritas)

let listaDeTarefas = []
tarefa1 = prompt('Informe a primeira tarefa do dia')
tarefa2 = prompt ('Informe a segunda tarefa do dia')
tarefa3 = prompt ('Informe a terceira tarefa do dia ')
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
let indice = prompt('Informe o número da tarefa 1,2 ou 3')
listaDeTarefas.splice(indice-1,1)
console.log(listaDeTarefas)
