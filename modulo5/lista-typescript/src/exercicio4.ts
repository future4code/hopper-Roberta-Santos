// O seguinte array traz as pessoas colaboradoras de uma
//  empresa, com seus salários, setores e se trabalham presencialmente ou por home office:
// const lista =
//     [
//  { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
//  { nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
//  { nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
//  { nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
//  { nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
//  { nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
//  { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]
// Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne
// apenas as pessoas do setor de marketing que trabalham presencialmente.
enum sets {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}
type pessoas = {
    nome: string,
    presencial: boolean,
    salário: number,
    setores: string | number,
}
const lista: Array<pessoas> =
    [
    { nome: "Marcos", salário: 2500, setores: sets.MARKETING , presencial: true },
    { nome: "Maria" ,salário: 1500, setores: sets.VENDAS, presencial: false},
    { nome: "Salete" ,salário: 2200, setores: sets.FINANCEIRO, presencial: true},
    { nome: "João" ,salário: 2800, setores: sets.MARKETING, presencial: false},
    { nome: "Josué" ,salário: 5500, setores: sets.FINANCEIRO, presencial: true},
    { nome: "Natalia" ,salário: 4700, setores: sets.VENDAS, presencial: true},
    { nome: "Paola" ,salário: 3500, setores: sets.MARKETING, presencial: true }
]
const busca = (li:Array<pessoas>) : Array<pessoas> =>{
    return li.filter((index)=> (index.presencial === true && index.setores === "marketing"))
}
console.log(busca(lista))