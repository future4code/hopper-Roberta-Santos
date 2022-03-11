/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartaComputador = []
let cartaUsuario = []
let cartaSorteada




console.log('====== Boas Vindas ao jogo de Blackjack! ======')

const continuar = confirm('Quer iniciar uma nova rodada?')
if(continuar){
  
  cartaSorteada = comprarCarta()
  cartaComputador.push(cartaSorteada)

  cartaSorteada = comprarCarta()
  cartaComputador.push(cartaSorteada)

  cartaSorteada = comprarCarta()
  cartaUsuario.push(cartaSorteada)
 
  cartaSorteada = comprarCarta()
  cartaUsuario.push(cartaSorteada)
   
}else{ console.log ('Game over')}

let somaUsuario= cartaUsuario[0].valor + cartaUsuario[0].valor

let somaComputador = cartaComputador[0].valor + cartaComputador[1].valor

console.log(`Usuário - cartas ${cartaUsuario[0].texto}, ${cartaUsuario[1].texto} - pontuaçao ${somaUsuario} `)
console.log(`Computador - cartas ${cartaComputador[0].texto}, ${cartaComputador[1].texto} - pontuaçao ${somaComputador} `)

if (somaUsuario == somaComputador){
   console.log('EMPATE!')
}else if (somaUsuario > somaComputador){
   console.log('O USUÁRIO GANHOU!')
}else{ console.log('O COMPUTADOR GANHOU!')}


