// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort(function(a, b) {
    return a - b;
  });
   return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray = array.filter((numeros) => {
      return numeros % 2 === 0
  })
  return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = array.filter((numeros) => {
        
           return(numeros % 2 === 0) 
           
    })
    let novoArray2 = novoArray.map((numeros)=>{
        return numeros ** 2
    })
    return novoArray2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let max = Math.max(...array)
  return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
      let objeto = {
      maiorNumero: "" ,
      maiorDivisivelPorMenor: "",
      diferenca:"" ,
    }
    let menorNumero

        if (num1 > num2){
          objeto.maiorNumero = num1, menorNumero = num2

        }else{
          objeto.maiorNumero = num2, menorNumero = num1
        }
        
        
          if(objeto.maiorNumero % menorNumero == 0){
              objeto.maiorDivisivelPorMenor = true
          }else {
              objeto.maiorDivisivelPorMenor = false
          }
        
                
        objeto.diferenca = objeto.maiorNumero - menorNumero

        return objeto
  

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for(let i = 0; numerosPares.length < n; i++){
    if (i % 2 == 0){
      numerosPares.push(i)
    }
  }
  return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
  return 'Equilátero'
}

if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
  return 'Escaleno'
}
if (ladoA != ladoB || ladoA != ladoC || ladoB != ladoC && ladoA == ladoB && ladoA == ladoC  ){
  return 'Isósceles'
}



}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}