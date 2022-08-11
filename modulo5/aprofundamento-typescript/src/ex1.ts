// const minhaString: string = 0
// o tipo number não pode ser atribuido ao tipo string

const meuNumero: number | string = 0

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores

}

enum Cores{
    VERDE = "Verde",
    AZUL = "Azul",
    AMARELO = "Amarelo",
    ROXO = "Roxo",
    VERMELHO = "Vermelho",
    VIOLETA = "Violeta"


}
const novaPessoa : Pessoa = {
    nome: "Faluno",
    idade: 59,
    corFavorita: Cores.AZUL
}