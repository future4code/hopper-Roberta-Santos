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
    array.sort(function(a, b) {
      return a - b;
    });
    

    let novoArray3 = []
    novoArray3.push(array[array.length-2])
    novoArray3.push(array[1]);

    return novoArray3

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let movie = {
    
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
  };
  return (`Venha assistir ao filme ${movie.nome}, de ${movie.ano}, dirigido por ${movie.diretor} e estrelado por ${movie.atores}.`)
 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let nome2 = {
     ...pessoa,
     nome: 'ANÔNIMO'
   }
   return nome2
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
     
   const podemEntrar = pessoas.filter((pessoa, index, array)=>{
     return pessoa.idade>14 && pessoa.altura>=1.5 && pessoa.idade<60
   })
   return podemEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
contas = contas.map(()=>{

})

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function(a,b){
   if(a.nome < b.nome){
    return -1;
   }else {
     return true
    };

  });
  consultas.sort(function(a,b){
    return a.dataDaConsulta < b.dataDaConsulta;      
    });
    return consultas
} 
     

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}